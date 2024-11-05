import disneyland from "./assets/disneyland-hd.jpg";
import data from './assets/data.json'

export default function DisneyMap({ updateRide, updateDrawer }) {
  
  function handleOnClick (e, id) {
    e.preventDefault();
    updateRide(id)
    updateDrawer()
  }

  return (
    <div className="max-w-6xl wrapper" style={{position:"relative"}}>
      <img src={disneyland} />
      <div className="disneylandOverlay">
        {data?.map((point) => (
          <div key={point.id} className="ridePoint" style={{position:"absolute", left: point.rightCoord+"px", top:point.downCoord+"px"}} onClick={(e) => handleOnClick(e, point.id)}></div>
        ))}      
      </div>
    </div>
  );
}
