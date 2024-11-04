import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, _res, next) => {
  console.log(req.ip, req.baseUrl, req.path, req.method);
  next();
});

import { serverPort } from "@common";

export const PORT = process.env.PORT || serverPort || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} | http://localhost:${PORT}`);
});
