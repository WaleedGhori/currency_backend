import express from "express";
import { convertCurrency } from "../Controller/CurrencyController";

const router = express.Router();

router.get("/convert", convertCurrency);


export default router;
