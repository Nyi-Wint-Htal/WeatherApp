type CurrentLocationProps = {
  onUseCurrentLocation: () => void;
};

const CurrentLocation = ({ onUseCurrentLocation }: CurrentLocationProps) => {
  return (
    <div
      className="DefaultContainer cursor-pointer py-7 hover:scale-105 duration-300 transition-all ease-out bg-orange-600 text-[clamp(1rem,1.5vw,5rem)] active:scale-100"
      onClick={onUseCurrentLocation}
    >
      <div className="flex flex-row items-center justify-center font-semibold text-white">
        <i className="fa-solid fa-location-dot"></i>
        <h1>Use Current Location</h1>
      </div>
    </div>
  );
};

export default CurrentLocation;
