export type currency =
  | "AUD"
  | "BRL"
  | "CAD"
  | "CHF"
  | "CNY"
  | "CZK"
  | "DKK"
  | "EUR"
  | "GBP"
  | "HRK"
  | "NOK"
  | "PLN"
  | "RUB"
  | "SEK"
  | "TRY"
  | "USD";

export type item = {
  market_hash_name: string;
  currency: currency;
  suggested_price: number;
  item_page: string;
  market_page: string;
  min_price?: number | null;
  max_price?: number | null;
  mean_price?: number | null;
  median_price?: number | null;
  quantity: number;
  created_at: number;
  updated_at: number;
  minTradable?: number;
};

export type items = item[];
