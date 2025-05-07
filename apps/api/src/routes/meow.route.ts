import { Hono } from "hono";
import { getMew } from "~/controllers";

const router = new Hono();
router.get("/", getMew);

export default router;
