import { useEffect, useState } from "react";
import fetchSuggestion from "../services/WeatherApiFetchSuggestions";

type CitySuggestion = {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
};

type SearchBarProps = {
  setCity: (city: string) => void;
  setCoords: (lat: number, lon: number) => void;
  setCityName: (cityName: string) => void;
};

const SearchBar = ({ setCity, setCoords, setCityName }: SearchBarProps) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);

  useEffect(() => {
    const searchSuggestions = async () => {
      if (search.length >= 3) {
        const response = await fetchSuggestion(search);
        setSuggestions(response ?? []);
      } else {
        setSuggestions([]);
      }
    };
    searchSuggestions();
  }, [search]);

  return (
    <div className="DefaultContainer flex-row fixed">
      <i className="fa-solid fa-magnifying-glass text-[#61330a]" />
      <i />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a city..."
        className="ml-2 w-full focus:outline-none text-[#61330a]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="searchBtn"
        onClick={() => {
          if (search.trim()) {
            setCity(search.trim());
            setSuggestions([]);
            setSearch("");
          }
        }}
      >
        Search
      </button>
      {search && (
        <div className="fixed top-7 translate-y-12 -translate-x-4 w-full max-w-3xl flex flex-col items-start justify-start border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.7)] border-t-0 rounded-sm bg-gray-200 pb-3 gap-y-2">
          {suggestions.map((city) => {
            return (
              <div
                key={`${city.name}-${city.lat}-${city.lon}`}
                className="flex items-center justify-start gap-x-5 hover:bg-gray-50 w-full cursor-pointer"
                onClick={() => {
                  console.log(city);
                  setCoords(city.lat, city.lon);
                  setCityName(city.name);
                  setSuggestions([]);
                  setSearch("");
                }}
              >
                <i className="fa-solid fa-magnifying-glass pl-3 " />
                <p>
                  {[city.name, city.state, city.country]
                    .filter(Boolean)
                    .join(",")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
