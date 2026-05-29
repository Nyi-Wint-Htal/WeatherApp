const MainWeather = () => {
  return (
    <div className="DefaultContainer">
      <div className="flex flex-row items-center">
        <i className="fa-solid fa-location-dot text-[clamp(1rem,3vw,3rem)]"></i>
        <h1 className="ml-3 text-[clamp(1.5rem,4vw,3rem)]">Thailand</h1>
      </div>
      <i className="fa-regular fa-sun text-[clamp(4rem,10vw,10rem)]"></i>
      <h2 className="text-[clamp(4rem,10vw,10rem)]">72°</h2>
      <p className="text-[clamp(1rem,2vw,4rem)]">Sunny</p>
      <div className="flex flex-row text-xs md:text-sm lg:text-lg transition-all duration-150 ease-out">
        <p>H:75°</p>
        <p>L:58°</p>
      </div>
      <div className="MainWeatherCardsContainer">
        <div className="MainWeatherInfoCard">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity</p>
          <p>65%</p>
        </div>
        <div className="MainWeatherInfoCard">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity</p>
          <p>65%</p>
        </div>
        <div className="MainWeatherInfoCard">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity</p>
          <p>65%</p>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
