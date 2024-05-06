import { Box, Stack, Typography } from "@mui/material";

function JoinOurSocialsTop() {
  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: "2rem",
        position: "relative",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.25rem",
          fontWeight: 700,
        }}
      >
        Join Our Socials
      </Typography>
      <Typography
        sx={{
          color: "#ffffff7d",
          fontSize: "1rem",
          mt: "1rem",
        }}
      >
        We regularly share valuable content on our socials. Join us there and
        get the reward
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          boxSizing: "border-box",
          backgroundColor: "#1F154599",
          border: "1px solid #2D2259",
          borderRadius: "0.938rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          my: "1.25rem",
          padding: "1rem 1.25rem",
          width: "100%",
        }}
      >
        <Typography
          color="white"
          fontSize="1rem"
          fontFamily={"Inter"}
          fontWeight="500"
          mb="0.5rem"
        >
          Reward
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <img
            src="/assets/dollar-icon.svg"
            width={20}
            height={20}
            alt="dollar"
          />
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 700,
              fontFamily: "Inria sans",
              ml: "0.5rem",
            }}
          >
            200 000
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default JoinOurSocialsTop;
