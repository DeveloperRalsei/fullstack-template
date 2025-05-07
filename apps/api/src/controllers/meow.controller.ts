import { meow } from "#";
import { MiddlewareHandler } from "hono";
import meowService from "~/services/meow.service";

export const getMew: MiddlewareHandler = async ({ req, ...c }) => {
    const mreow: meow = {
        ":3": "meow",
    };

    const data = meowService.getMew();

    return c.json(data);
};
