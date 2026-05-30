import { useEffect, useState } from "react";
import CurrentLocation from "../components/CurrentLocation";
import Forecast from "../components/Forecast";
import MainWeather from "../components/MainWeather";
import SearchBar from "../components/SearchBar";
import fetchWeather from "../services/WeatherApiFetchCurrent";
import fetchWeatherForecast from "../services/WeatherApiFetchForecast";
import fetchWeatherByCoord from "../services/WeatherApiFetchCoord";
import fetchWeatherForecastByCoord from "../services/WeatherApiFetchForecastCoord";

type LocationState =
  | { type: "city"; city: string }
  | { type: "coords"; lat: number; lon: number };

type HomeProps = {
  setWeatherBg: (weatherBg: string) => void;
};

const Home = ({ setWeatherBg }: HomeProps) => {
  const [location, setLocation] = useState<LocationState>(() => {
    const savedLocation = localStorage.getItem("weatherLocation");
    if (savedLocation) {
      return JSON.parse(savedLocation);
    }
    return { type: "city", city: "Bangkok" };
  });

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    localStorage.setItem("weatherLocation", JSON.stringify(location));

    const loadWeather = async () => {
      try {
        if (location.type === "city") {
          const data = await fetchWeather(location.city);
          const forecastData = await fetchWeatherForecast(location.city);
          setWeather(data);
          setForecast(forecastData);
          setWeatherBg(data.weather[0].main);
        }
      } catch {
        alert("City not found. Please try another city.");
      }
      if (location.type === "coords") {
        const data = await fetchWeatherByCoord(location.lat, location.lon);
        const forecastData = await fetchWeatherForecastByCoord(
          location.lat,
          location.lon,
        );
        setWeather(data);
        setForecast(forecastData);
        setWeatherBg(data.weather[0].main);
      }
    };
    loadWeather();
  }, [location]);

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ type: "coords", lat: lat, lon: lon });
      },
      () => {
        alert("Unable to get your location");
      },
    );
  };

  return (
    <main className="Home">
      <SearchBar setCity={(city) => setLocation({ type: "city", city })} />
      <MainWeather weatherData={weather} />
      <Forecast forecastData={forecast} />
      <CurrentLocation onUseCurrentLocation={handleCurrentLocation} />
    </main>
  );
};

export default Home;
