# Candlestick chart for cryptocurrencies using React

To run app locally:

```
mpm i
npm run dev
```

## Usage as NPM package

Install the package:

```
npm i crypto-candles-chart
```

Usage:

```ts
import { CandlestickChart } from "crypto-candles-chart";

const App = () => {
  return <CandlestickChart pair="BTCUSDT" />
}
```
