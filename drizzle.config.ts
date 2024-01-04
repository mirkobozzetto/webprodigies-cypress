import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set");
}

export default {
  schema: "./src",
};
