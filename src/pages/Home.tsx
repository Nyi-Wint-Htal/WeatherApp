import { useEffect, useState } from "react";
import CurrentLocation from "../components/CurrentLocation";
import Forecast from "../components/Forecast";
import MainWeather from "../components/MainWeather";
import SearchBar from "../components/SearchBar";
import fetchWeather from "../services/WeatherApiFetchCurrent";
import fetchWeatherForecast from "../services/WeatherApiFetchForecast";
import fetchWeatherByCoord from "../services/WeatherApiFetchCoord";
import fetchWeatherForecastByCoord from "../services/WeatherApiFetchForecastCoord";

const Home = () => {
  const [city, setCity] = useState("Bangkok");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather(city);
      const forecastData = await fetchWeatherForecast(city);
      setWeather(data);
      setForecast(forecastData);
    };
    loadWeather();
  }, [city]);
  console.log(forecast);

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browswer.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const weatherData = await fetchWeatherByCoord(lat, lon);
        const forecastData = await fetchWeatherForecastByCoord(lat, lon);

        setWeather(weatherData);
        setForecast(forecastData);
      },
      () => {
        alert("Unable to get your location");
      },
    );
  };

  return (
    <main className="Home">
      <SearchBar setCity={setCity} />
      <MainWeather weatherData={weather} />
      <Forecast forecastData={forecast} />
      <CurrentLocation onUseCurrentLocation={handleCurrentLocation} />
    </main>
  );
};

export default Home;
