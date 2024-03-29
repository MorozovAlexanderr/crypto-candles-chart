import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CandlesChart from "./components/CandlestickChart";
import { CandlestickChartProps } from "./components/CandlestickChart/CandlestickChart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = (props: CandlestickChartProps) => (
  <QueryClientProvider client={queryClient}>
    <h1>{props.pair || "BTCUSDT"} Candlestick chart</h1>
    <CandlesChart {...props} />
  </QueryClientProvider>
);

export default App;
