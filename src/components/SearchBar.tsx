import { useState } from "react";

type SearchBarProps = {
  setCity: (city: string) => void;
};

const SearchBar = ({ setCity }: SearchBarProps) => {
  const [search, setSearch] = useState("");
  return (
    <div className="DefaultContainer flex-row">
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
            setCity(search);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
