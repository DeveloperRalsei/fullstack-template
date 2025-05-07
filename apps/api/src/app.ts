import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { config } from "dotenv";
import { meowRoutes } from "./routes";
config({ path: "../../.env" });

const app = new Hono();
app.use(cors(), logger());
app.route("/meow", meowRoutes);

export default app;
