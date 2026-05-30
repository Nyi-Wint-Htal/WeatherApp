import ForecastInfoCard from "./ForecastInfoCard";

type ForecastItem = {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    description: string;
    main: string;
  }[];
};

type ForecastProps = {
  forecastData: {
    list: ForecastItem[];
  } | null;
};

const Forecast = ({ forecastData }: ForecastProps) => {
  if (!forecastData) {
    return <div className="DefaultContainer">Loading forecast...</div>;
  }
  const dailyForecast = forecastData.list
    .filter((item: ForecastItem) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);
  return (
    <div className="DefaultContainer items-start font-semibold ">
      <h1 className="text-2xl">5-Day Forecast</h1>
      <div className="flex flex-row gap-x-3 w-full pb-2 overflow-x-auto overflow-y-visible px-2 py-3 scrollbar-none">
        {dailyForecast.map((forecast: ForecastItem) => (
          <ForecastInfoCard forecast={forecast} key={forecast.dt_txt} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
