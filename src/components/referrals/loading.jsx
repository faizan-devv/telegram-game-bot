import { Box, Stack } from "@mui/material";

function Loading() {
  return (
    <Stack
      sx={{
        alignItems: "center",

        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "4rem 0 0",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          className="loader"
          component="img"
          src="/assets/dot-loader.svg"
          width={254}
          height={254}
          alt="layer"
          sx={{
            margin: "-1.5px 0 0",
          }}
        />
        <Box
          component="img"
          src="/assets/cat-1.svg"
          width={117}
          height={111}
          alt="referral"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        />
      </Box>
    </Stack>
  );
}

export default Loading;
