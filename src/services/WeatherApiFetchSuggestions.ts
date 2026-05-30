const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

async function fetchSuggestion(search: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error("Could not fetch suggestions");
    }
    const suggestions = await response.json();
    return suggestions;
  } catch (error) {
    console.error(error);
  }
}

export default fetchSuggestion;
