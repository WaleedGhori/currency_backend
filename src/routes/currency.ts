import express from "express";
import { convertCurrency, getMe } from "../Controller/CurrencyController";

const router = express.Router();

router.get("/convert", convertCurrency);
router.get("/me", getMe);

export default router;
