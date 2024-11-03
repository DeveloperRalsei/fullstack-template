import express from "express";
import cors from "cors";
import { config } from "dotenv";
config({ path: "../../.env" });

const app = express();
app.use(express.json());
app.use(cors());
import { meow } from "@common";

app.get("/meow", (_req, res) => {
  res.send({ ":3": "meow" } as meow);
});

export const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} | http://localhost:${PORT}`);
});
