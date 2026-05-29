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
    .filter((item: any) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);
  return (
    <div className="DefaultContainer items-start ">
      <h1>5-Day Forecast</h1>
      <div className="flex flex-row gap-x-3 overflow-x-auto overflow-y-hidden w-full pb-2">
        {dailyForecast.map((forecast: any) => (
          <ForecastInfoCard forecast={forecast} key={forecast.dt_txt} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
