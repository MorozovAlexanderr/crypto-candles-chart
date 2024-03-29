import Chart from "react-google-charts";
import { useCandles } from "../../api/candles";

const chartOptions = {
  legend: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

const CandlestickChart = () => {
  const { data, isFetching, error } = useCandles("BTCUSDT");
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
    />
  );
};

export default CandlestickChart;
