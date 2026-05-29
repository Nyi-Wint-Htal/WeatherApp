type CurrentLocationProps = {
  onUseCurrentLocation: () => void;
};

const CurrentLocation = ({ onUseCurrentLocation }: CurrentLocationProps) => {
  return (
    <div
      className="DefaultContainer cursor-pointer"
      onClick={onUseCurrentLocation}
    >
      <div className="flex flex-row items-center justify-center">
        <i className="fa-solid fa-location-dot"></i>
        <h1>Use Current Location</h1>
      </div>
    </div>
  );
};

export default CurrentLocation;
