import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CandlesChart from "./components/CandlestickChart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>BTC/USDT Candlestick chart</h1>
      <CandlesChart />
    </QueryClientProvider>
  );
}

export default App;
