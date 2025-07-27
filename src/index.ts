import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import currencyRoutes from "./routes/currency"

const app = express();

app.use(cors());
app.use("/api/v1", currencyRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
