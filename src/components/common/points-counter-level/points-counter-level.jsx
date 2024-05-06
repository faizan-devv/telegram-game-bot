import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function PointsCounterLevel() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1.9rem 0 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/assets/dollar-icon.svg"
          width={40}
          height={40}
          alt="dollar"
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "3.125rem",
            fontWeight: 700,
            fontFamily: "Inria Sans",
            ml: "0.5rem",
          }}
        >
          2590
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-start",
          mt:'0.65rem',
          "& svg": {
            color: "#ffffff7d",
          },
        }}
      >
        <img
          src="/assets/level-1.svg"
          width={18}
          height={20}
          alt="trophy"
        />
        <Typography
          sx={{
            color: "#ffffff7d",
            fontSize: "1.25rem",
            mx: "0.4rem",
          }}
        >
          Basic
        </Typography>
        <KeyboardArrowRightIcon />
      </Box>
    </Box>
  );
}

export default PointsCounterLevel;
