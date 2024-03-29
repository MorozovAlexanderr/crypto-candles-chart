import Chart, { ReactGoogleChartProps } from "react-google-charts";
import { useCandles } from "../../api/candles";

export type CandlestickChartProps = Partial<ReactGoogleChartProps> & {
  pair?: string;
};

const chartOptions = {
  legend: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

const chartHeader = ["Time", "Low", "Open", "Close", "High"];

const CandlestickChart = ({
  pair = "BTCUSDT",
  ...props
}: CandlestickChartProps) => {
  const { data, isFetching, error } = useCandles(pair);
  const chartData = [chartHeader, ...(data || [])];

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

export default CandlestickChart;
