
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import currencyRoutes from "./routes/currency";

dotenv.config();

const app = express();

app.use(cors());
app.use("/api/v1", currencyRoutes);

export default app;
