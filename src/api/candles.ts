import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CandlesResponse } from "../types";
import dayjs from "dayjs";

const fetchCandles = async (
  symbol: string,
  limit: number
): Promise<CandlesResponse> => {
  const response = await axios.get(
    "https://api.bitget.com/api/v2/mix/market/candles",
    {
      params: {
        symbol,
        limit,
        productType: "usdt-futures",
        granularity: "1H", // get hourly candles
      },
    }
  );
  return response.data;
};

export const useCandles = (symbol: string, limit = 10) => {
  return useQuery({
    queryKey: ["candles"],
    queryFn: () => fetchCandles(symbol, limit),
    select: (candles) =>
      candles.data.map((candle) => [
        dayjs(new Date(Number(candle[0]))).format("MMMM D, HH:mm"),
        Number(candle[3]), // low value
        Number(candle[1]), // opening value
        Number(candle[4]), // closing value
        Number(candle[2]), // high value
      ]),
  });
};
