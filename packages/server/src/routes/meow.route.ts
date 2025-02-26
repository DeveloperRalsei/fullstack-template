import { Hono } from "hono";
import { getMew } from "~/controllers";

const router = new Hono();
router.get("/meow", getMew);

export default router;
