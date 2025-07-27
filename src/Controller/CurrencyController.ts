import { Request, Response } from "express";
import axios from "axios";


/**
 * @param from - Currency code to convert from
 * @param to - Currency code to convert to
 * @param amount - Amount to convert
 * @returns JSON response with converted amount or error message
*/
export const convertCurrency = async (req: Request, res: Response)=> {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    res.status(400).json({ error: "Missing required query parameters." });
    return;
  }

  try {
    const response = await axios.get("https://api.apilayer.com/exchangerates_data/convert", {
      headers: {
        apikey: process.env.EXCHANGE_API_KEY,
      },
      params: {
        from,
        to,
        amount,
      },
    });

    if (response.status !== 200) {
      res.status(response.status).json({ error: "Failed to convert currency." });
      return;
    }

    return res.status(200).json({
        message:"Currency conversion successful.",
        data: response.data,
    })
  } catch (error) {
    console.error("Currency conversion failed:", error);
    res.status(500).json({ error: "Currency conversion failed." });
  }
};
