const SearchBar = () => {
  return (
    <div className="DefaultContainer flex-row">
      <i className="fa-solid fa-magnifying-glass" />
      <i />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a city..."
        className="ml-2"
      />
    </div>
  );
};

export default SearchBar;
