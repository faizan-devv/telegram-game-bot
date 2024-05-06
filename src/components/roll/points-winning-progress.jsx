import { Box, Typography } from "@mui/material";
import GenericProgressBar from "../atoms/generic-progress-bar/generic-progress-bar";

function PointsWinningProgress() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem 0 0",
        position: "relative",
        zIndex: 1,
        maxWidth: "19.375rem",
        width: "100%",
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
          src="/assets/charge-icon.svg"
          width={30}
          height={30}
          alt="charge"
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 700,
            fontFamily: "Inria Sans",
            lineHeight: "72px",
            mx: "0.25rem",
          }}
        >
          2590
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "0.75rem",
            lineHeight: "16px",
            mt: "0.25rem",
          }}
        >
          / 2590
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
      >
        <GenericProgressBar value={50} bgColor="#715DC7" type="dice" />
      </Box>
    </Box>
  );
}

export default PointsWinningProgress;
