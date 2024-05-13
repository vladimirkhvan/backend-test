import pg from 'pg';
import "dotenv/config";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})