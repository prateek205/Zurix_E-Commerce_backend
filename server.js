import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectdb } from "./config/db.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;

connectdb()

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
  console.log(`The Server is running on port: http://localhost:${PORT}`),
);
