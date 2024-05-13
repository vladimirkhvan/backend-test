import pg from "pg";
import "dotenv/config";

async function seedUsers(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        balance FLOAT NOT NULL DEFAULT 0.0
      );
    `);

    console.log(`Created "users" table`);

    await client.query(
      `
      INSERT INTO users (name, balance)
      VALUES ($1, $2)
      ON CONFLICT (id) DO NOTHING;
    `,
      ["Vladimir Khvan", 1000],
    );

    console.log(`Seeded 1 users`);
    return;
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  });

  const client = await pool.connect();

  await seedUsers(client);

  client.release();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
