type ForecastInfoCardProps = {
  forecast: any;
};

const ForecastInfoCard = ({ forecast }: ForecastInfoCardProps) => {
  const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
    weekday: "short",
  });
  const iconCode = forecast.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return (
    <div className="flex flex-col items-center justify-center py-2 px-[clamp(1rem,3vw,3rem)] border-2">
      <h2 className="text-[clamp(0.8rem,1.5vw,4rem)]">{day}</h2>
      <img src={iconUrl} alt={forecast.weather[0].description} />
      <p>{Math.round(forecast.main.temp_max)}°</p>
      <p>{Math.round(forecast.main.temp_min)}°</p>
    </div>
  );
};

export default ForecastInfoCard;
