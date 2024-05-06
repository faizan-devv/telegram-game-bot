import { Box } from "@mui/material";


function RollingDice() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem 0",
        minHeight: "18rem",
        width: "100%",
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
        <img src="/assets/dice-large.svg" width={222} height={247} alt="dice" />
      </Box>
    </Box>
  );
}

export default RollingDice;
