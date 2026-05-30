type WeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

type MainWeatherProps = {
  weatherData: WeatherData | null;
  cityName: string;
};

const MainWeather = ({ weatherData, cityName }: MainWeatherProps) => {
  if (!weatherData) {
    return (
      <div className="DefaultContainer mt-25">
        <h1>Loading...</h1>
      </div>
    );
  }
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return (
    <div className="DefaultContainer mt-25">
      <div className="flex flex-row items-center">
        <i className="fa-solid fa-location-dot text-[clamp(1rem,3vw,3rem)] text-orange-600"></i>
        <h1 className="ml-3 text-[clamp(1.5rem,4vw,3rem)] font-semibold">
          {cityName}, {weatherData.sys.country}
        </h1>
      </div>
      <img
        src={iconUrl}
        alt={weatherData.weather[0].description}
        className="w-30 sm:w-40 md:w-50 lg:w-55 h-30 sm:h-40 md:h-50 lg:h-55"
      />
      <h2 className="text-[clamp(4rem,10vw,10rem)]">
        {Math.round(weatherData.main.temp)}°
      </h2>
      <p className="text-[clamp(1rem,2vw,4rem)]">
        {weatherData.weather[0].main}
      </p>
      <div className="flex flex-row text-xs md:text-sm lg:text-lg transition-all duration-150 ease-out">
        <p>H:{Math.round(weatherData.main.temp_max)}°</p>
        <p>L:{Math.round(weatherData.main.temp_min)}°</p>
      </div>
      <div className="MainWeatherCardsContainer">
        <div className="MainWeatherInfoCard text-white border-blue-800 bg-blue-600">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity</p>
          <p>{weatherData.main.humidity}%</p>
        </div>
        <div className="MainWeatherInfoCard text-black border-orange-800 bg-orange-600">
          <i className="fa-solid fa-wind"></i>
          <p>Wind</p>
          <p>{weatherData.wind.speed} m/s</p>
        </div>
        <div className="MainWeatherInfoCard text-white border-red-800 bg-red-600">
          <i className="fa-solid fa-temperature-high"></i>
          <p>Feels like</p>
          <p>{Math.round(weatherData.main.feels_like)}°</p>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
