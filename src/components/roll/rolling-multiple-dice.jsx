import { Box } from "@mui/material";

function RollingMultipleDice() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem 0",

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
          position: "relative",
          minHeight: "17.5rem",
          maxWidth: "19.375rem",
          width: "100%",
          "& img:first-of-type": {
            position: "absolute",
            top: 0,
            left: 0,
          },
          "& img:nth-of-type(2)": {
            position: "absolute",
            top: 0,
            right: 0,
          },
          "& img:nth-of-type(3)": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          },
          "& img:nth-of-type(4)": {
            position: "absolute",
            bottom: 0,
            left: 0,
          },
          "& img:last-of-type": {
            position: "absolute",
            bottom: 0,
            right: 0,
          },
        }}
      >
        <img
          src="/assets/dice-medium.svg"
          width={101}
          height={112}
          alt="dice"
        />
        <img
          src="/assets/dice-medium.svg"
          width={101}
          height={112}
          alt="dice"
        />
        <img
          src="/assets/dice-medium.svg"
          width={101}
          height={112}
          alt="dice"
        />
        <img
          src="/assets/dice-medium.svg"
          width={101}
          height={112}
          alt="dice"
        />
        <img
          src="/assets/dice-medium.svg"
          width={101}
          height={112}
          alt="dice"
        />
      </Box>
    </Box>
  );
}

export default RollingMultipleDice;
