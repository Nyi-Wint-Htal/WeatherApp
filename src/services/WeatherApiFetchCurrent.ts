const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

async function fetchWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  if (!response.ok) {
    throw new Error("City not found!");
  }
  const weatherData = await response.json();
  return weatherData;
}

export default fetchWeather;
