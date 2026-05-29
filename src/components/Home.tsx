import CurrentLocation from "./CurrentLocation";
import Forecast from "./Forecast";
import MainWeather from "./MainWeather";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <main className="Home">
      <SearchBar />
      <MainWeather />
      <Forecast />
      <CurrentLocation />
    </main>
  );
};

export default Home;
