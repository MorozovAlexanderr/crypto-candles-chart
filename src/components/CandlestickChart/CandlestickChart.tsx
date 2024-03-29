import Chart, { ReactGoogleChartProps } from "react-google-charts";
import { useCandles } from "../../api/candles";

type CandlestickChartProps = Partial<ReactGoogleChartProps> & {
  pair: string;
};

const chartOptions = {
  legend: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
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

export default CandlestickChart;
