import Chart, { ReactGoogleChartProps } from "react-google-charts";
import { QueryClientProvider } from "@tanstack/react-query";
import { useCandles } from "../../api/candles";
import { queryClient } from "../../lib";

type CandlestickChartProps = Partial<ReactGoogleChartProps> & {
  pair: string;
};

const chartOptions = {
  legend: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

const CandlestickChart = ({ pair, ...props }: CandlestickChartProps) => {
  const { data, isFetching, error } = useCandles(pair);
  const chartData = [["Time", "", "", "", ""], ...(data ?? [])];

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <Chart
      chartType="CandlestickChart"
      width="1000px"
      height="500px"
      data={chartData}
      options={chartOptions}
      {...props}
    />
  );
};

// Needs for external usage by npm package
export const CandlestickChartWithProvider = (props: CandlestickChartProps) => (
  <QueryClientProvider client={queryClient}>
    <CandlestickChart {...props} />
  </QueryClientProvider>
);

export default CandlestickChart;
