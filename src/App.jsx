import { useState } from "react";
import { Stack } from "@mui/material";
import Header from "./components/menu-footer/menu-footer";
import MenuFooter from "./components/menu-footer/menu-footer";
import MainContent from "./components/main-content/main-content";
import "./App.css";

function App() {
  const [activeDiv, setActiveDiv] = useState("one");
  const [joinSocial, setJoinSocial] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  const handleMenuClick = (divId) => {
    setActiveDiv(divId);
  };

  const handleJoinSocial = () => {
    setJoinSocial(true);
  };
  const handleAddAddress = () => {
    setAddAddress(true);
  };

  const handleClose = () => {
    setJoinSocial(false);
    setAddAddress(false);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#282c34",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#0A0619",
          boxSizing: "border-box",
          display: "block",
          height: "100%",
          margin: "0 auto",
          p: "1.25rem",
          maxWidth: "24.375rem",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Header
          joinSocial={joinSocial}
          addAddress={addAddress}
          handleClose={handleClose}
        />
        <MainContent
          active={activeDiv}
          handleJoinSocial={handleJoinSocial}
          handleAddAddress={handleAddAddress}
          joinSocial={joinSocial}
          addAddress={addAddress}
        />
        <MenuFooter handleClick={handleMenuClick} active={activeDiv} />
      </Stack>
    </Stack>
  );
}

export default App;
