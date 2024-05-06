import { Stack, Typography } from "@mui/material";

function Promote() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        height: "90%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.25rem",
          fontWeight: 700,
          ml: "1rem",
        }}
      >
        Promote
      </Typography>
    </Stack>
  );
}

export default Promote;