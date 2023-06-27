# Weather App

- weatherbit api free plan(50 requests/day)
- allow permission for location in browser to load weather automatically
- search with city name
- shows:
  - temperature
  - period of day(background color changes for day and night)
  - weather description
  - longitude
  - latitude
  - wind speed
  - wind direction
  - relative humidity
  - rainfall
  - snow
- dependencies:
  - tailwind + daisyUi (design)
  - axios

## Getting Started

Remember to add .env file with values for:

```bash
NEXT_PUBLIC_WEATHER_API_URL 
NEXT_PUBLIC_WEATHER_API_KEY 
```

Install all dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build for production:

```bash
npm run build

```

## Deploy Link

[https://btst-weatherapp.vercel.app/](https://btst-weatherapp.vercel.app/)


## Walkthrough

![walkthrough](https://github.com/BIKRAM-SAHA/BTST-weatherapp/blob/master/walkthrough.gif)