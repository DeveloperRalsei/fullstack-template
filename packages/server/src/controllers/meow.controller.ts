import { meow } from "#";
import { MiddlewareHandler } from "hono";

export const getMew: MiddlewareHandler = async ({ req, ...c }) => {
    const mreow: meow = {
        ":3": "meow",
    };

    return c.json(mreow);
};
