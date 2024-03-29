import { QueryClientProvider } from "@tanstack/react-query";
import CandlesChart from "./components/CandlestickChart";
import { queryClient } from "./lib";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>BTC/USDT Candlestick chart</h1>
      <CandlesChart pair="BTCUSDT" />
    </QueryClientProvider>
  );
}

export default App;
