import { useState, useEffect } from "react";
import DisneyMap from "./disneyMap";
import data from "./assets/data.json";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [rideId, setRideId] = useState(15);
  const [open, setOpen] = useState(false);
  const [rideInfo, setRideInfo] = useState({});

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateRide = (newState) => {
    setRideId(newState);
  };

  const updateDrawer = () => {
    setOpen(!open);
  };

  const rideData = (id) => {
    let temp = data.filter((s) => s.id === id);
    setRideInfo(temp[0]);
  };

  useEffect(() => {
    rideData(rideId);
  }, [rideId]);

  return (
    <>
      <div className="flex justify-center">
        <DisneyMap updateRide={updateRide} updateDrawer={updateDrawer} />
        <Box>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <List style={{ minWidth: "30rem", maxWidth: "30rem" }}>
              <ListItem>
                <ListItemText primary={rideInfo.name} />
              </ListItem>
              <ListItem>
                <p>Yeah opened: {rideInfo.yearOpen}</p>
              </ListItem>
              <ListItem >
                <img src={rideInfo.imageExterior} />
              </ListItem>
              <ListItem>
                <p>{rideInfo.rideFacts}</p>
              </ListItem>
              <Divider />
              <List>
              <ListItem>
                <ListItemText primary="Defunct rides that used to be here instead" />
              </ListItem>
                  {/* {rideInfo} */}
                  {rideInfo?.previously?.map((ride) =>(
                <ListItem key={ride.name}>
                    <ListItemText >{ride.name}</ListItemText>
                </ListItem>
                  ))}

              </List>
            </List>
          </Drawer>
        </Box>
      </div>
    </>
  );
}

export default App;
