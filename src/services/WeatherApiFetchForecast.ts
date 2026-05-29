const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

async function fetchWeatherForecast(city: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const forecastData = await response.json();
    return forecastData;
  } catch (error) {
    console.error(error);
  }
}

export default fetchWeatherForecast;
