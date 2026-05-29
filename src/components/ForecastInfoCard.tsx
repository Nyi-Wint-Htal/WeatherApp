const ForecastInfoCard = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 px-[clamp(1rem,3vw,3rem)] border-2">
      <h2 className="text-[clamp(0.8rem,1.5vw,4rem)]">Mon</h2>
      <i className="fa-solid fa-sun text-[clamp(1rem,3vw,4rem)]"></i>
      <p>74°</p>
      <p>59°</p>
    </div>
  );
};

export default ForecastInfoCard;
