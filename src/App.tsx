import { useState } from "react";
import Home from "./pages/Home";

const getAppBackground = (weatherBg: string | null) => {
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

function App() {
  const [weatherBg, setWeatherBg] = useState<string | null>(null);
  console.log(weatherBg);
  return (
    <div
      className={`${getAppBackground(weatherBg)} min-h-screen overflow-auto`}
    >
      <Home setWeatherBg={setWeatherBg} />
    </div>
  );
}

export default App;
