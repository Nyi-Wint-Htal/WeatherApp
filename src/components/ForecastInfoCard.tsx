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

const forecastTextColor = (weatherBg: string | null) => {
  switch (weatherBg) {
    case "Clear":
      return "text-black";

    case "Clouds":
      return "text-white";

    case "Rain":
    case "Drizzle":
      return "text-black";

    case "Thunderstorm":
      return "text-yellow-300";

    case "Snow":
      return "text-slate-800";

    case "Mist":
    case "Fog":
    case "Haze":
      return "text-white";

    default:
      return "text-black";
  }
};

const forecastCardBg = (weatherBg: string | null) => {
  switch (weatherBg) {
    case "Clear":
      return "bg-yellow-400";

    case "Clouds":
      return "bg-gray-500";

    case "Rain":
    case "Drizzle":
      return "bg-cyan-500";

    case "Thunderstorm":
      return "bg-violet-900 text-white";

    case "Snow":
      return "bg-sky-200";

    case "Mist":
    case "Fog":
    case "Haze":
      return "bg-pink-500";

    default:
      return "bg-orange-500";
  }
};

type ForecastInfoCardProps = {
  forecast: ForecastItem;
};

const ForecastInfoCard = ({ forecast }: ForecastInfoCardProps) => {
  const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
    weekday: "short",
  });
  const iconCode = forecast.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return (
    <div
      className={`forecastCard ${forecastCardBg(forecast.weather[0].main)} ${forecastTextColor(forecast.weather[0].main)}`}
    >
      <h2 className="text-[clamp(0.8rem,1.5vw,4rem)]">{day}</h2>
      <img src={iconUrl} alt={forecast.weather[0].description} />
      <p>{Math.round(forecast.main.temp_max)}°</p>
      <p>{Math.round(forecast.main.temp_min)}°</p>
    </div>
  );
};

export default ForecastInfoCard;
