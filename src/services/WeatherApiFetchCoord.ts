const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

async function fetchWeatherByCoord(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}

export default fetchWeatherByCoord;
