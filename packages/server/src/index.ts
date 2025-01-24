import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { meow } from '@common'
import { config } from 'dotenv'; config({ path: "../../.env" })

const { fetch, ...app } = new Hono()
app.use(
    cors(),
    logger(),
)

app.get("/meow", async ({ req, ...c }) => {
    const mreow: meow = {
        ":3": "meow"
    }

    return c.json(mreow)

})

const port = process.env.SERVER_PORT || 3000
serve({
    fetch,
    port: Number(port)
})
