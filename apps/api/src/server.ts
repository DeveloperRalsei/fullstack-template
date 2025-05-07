import server from "./app";
import { serve } from "@hono/node-server";

const port = Number(process.env.API_PORT) || 3000;
serve(
    {
        fetch: server.fetch,
        port,
    },
    (info) =>
        console.log(
            `Server running on port ${info.port} | http://localhost:${info.port}`,
        ),
);
