import { Redis } from "ioredis";
import "dotenv/config";

const getRedisUrl = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }

  throw new Error("Redis url is not defined");
};

export const redis = new Redis(getRedisUrl());
