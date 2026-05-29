import ForecastInfoCard from "./ForecastInfoCard";

const Forecast = () => {
  return (
    <div className="DefaultContainer items-start">
      <h1>5-Day Forecast</h1>
      <div className="flex flex-row gap-x-3">
        <ForecastInfoCard />
        <ForecastInfoCard />
        <ForecastInfoCard />
        <ForecastInfoCard />
        <ForecastInfoCard />
      </div>
    </div>
  );
};

export default Forecast;
