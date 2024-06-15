import dotnev from "dotenv";
import path from "path";

dotnev.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.DEFAULT_PASSWORD,
};
