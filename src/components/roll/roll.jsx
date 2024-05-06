import { Box, Stack } from "@mui/material";
import RollingDice from "./rolling-dice";
import PointsWinning from "./points-winning-progress";
import WinningLevels from "./winning-levels";
import RollingMultipleDice from "./rolling-multiple-dice";
import PointsCounterLevel from "../common/points-counter-level/points-counter-level";

function Roll() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        // height: "100%",
        justifyContent: "center",
        width: "100%",
        padding: "0 0 2.5rem",
      }}
    >
      <Box
        sx={{
          background: "url(/assets/roll-layer-1.png)",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "535px",
          width: "329px",
          position: "absolute",
          top: 0,
          right: "-3rem",
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          background: "url(/assets/bg-layer-2.png)",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "535px",
          width: "329px",
          position: "absolute",
          top: "10rem",
          left: "-3.5rem",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <PointsCounterLevel />
      {/* <RollingDice /> */}
      <RollingMultipleDice />
      <PointsWinning />
      <WinningLevels />
    </Stack>
  );
}

export default Roll;
