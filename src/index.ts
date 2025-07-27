// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import currencyRoutes from "./routes/currency";
import { connectDB } from "./db";
dotenv.config();

const app = express();

app.use(cors());
app.use("/api/v1", currencyRoutes);

connectDB();
export default app;
