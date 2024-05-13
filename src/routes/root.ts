import axios from "axios";
import { items, item } from "../types/index.js";
import { FastifyInstance } from "fastify";

import { redis } from "../lib/redis.js";

export const root = async (fastify: FastifyInstance) => {
  fastify.get("/", async (_, reply) => {
    try {
      const cachedValue = await redis.get("csItems");

      if (cachedValue) {
        return JSON.parse(cachedValue);
      }

      const [untradeableResponse, tradableResponse] = await Promise.all([
        axios.get("https://api.skinport.com/v1/items?tradable=0"),
        axios.get("https://api.skinport.com/v1/items?tradable=1"),
      ]);
      let untradeableItems: items = untradeableResponse.data;
      let tradableItems: items = tradableResponse.data;

      let computedValue = null;

      if (tradableItems.length === untradeableItems.length) {
        computedValue = untradeableItems.map((item: item, idx: number) => ({
          market_hash_name: item.market_hash_name,
          currency: item.currency,
          suggested_price: item.suggested_price,
          item_page: item.item_page,
          market_page: item.market_page,
          max_price: item.max_price,
          mean_price: item.mean_price,
          median_price: item.median_price,
          quantity: item.quantity,
          created_at: item.created_at,
          updated_at: item.updated_at,
          min_untradable: item.min_price,
          min_tradable: tradableItems[idx]?.min_price,
        }));
      } else {
        computedValue = untradeableItems.map((item: item) => ({
          market_hash_name: item.market_hash_name,
          currency: item.currency,
          suggested_price: item.suggested_price,
          item_page: item.item_page,
          market_page: item.market_page,
          max_price: item.max_price,
          mean_price: item.mean_price,
          median_price: item.median_price,
          quantity: item.quantity,
          created_at: item.created_at,
          updated_at: item.updated_at,
          min_untradable: item.min_price,
          min_tradable: tradableItems.find(
            (tradableItem: item) => item.market_hash_name === tradableItem.market_hash_name,
          )?.min_price,
        }));
      }

      await redis.set("csItems", JSON.stringify(computedValue));
      await redis.expire("csItems", 300);

      return computedValue;
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};
