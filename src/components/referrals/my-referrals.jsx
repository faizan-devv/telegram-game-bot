import { Box, Stack, Typography } from "@mui/material";
import GenericButton from "../atoms/generic-button/generic-button";

function MyReferrals() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "#1F154599",
        border: "1px solid #2D2259",
        borderRadius: "1.25rem",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "4rem 0 0",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/assets/top-layer.png"
        width={100}
        height={30}
        alt="layer"
        sx={{
          margin: "-1.5px 0 0",
        }}
      />
      <Box
        component="img"
        src="/assets/referral-icon.svg"
        width={35}
        height={35}
        alt="referral"
        sx={{
          position: "absolute",
          top: "-2rem",
          ml: "0.5rem",
        }}
      />
      <Box
        sx={{
          padding: "1.25rem",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#ffffff7d",
            fontSize: "0.875rem",
            mt: "1rem",
          }}
        >
          My Referrals
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "1.875rem",
            fontWeight: 700,
            fontFamily: "Inria Sans",
            my: "1rem",
          }}
        >
          10 Referrals
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/dollar-icon.svg"
            width={20}
            height={20}
            alt="dollar"
          />
          <Typography
            sx={{
              color: "#D49A34",
              fontSize: "1.25rem",
              fontWeight: 700,
              fontFamily: "Inria Sans",
              ml: "0.75rem",
            }}
          >
            + 7000
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt="1.5rem"
          width={"100%"}
        >
          <GenericButton
            text={"Invite a Friend"}
            bgColor={"#5235E8"}
            radius={"2.5rem"}
            color={"white"}
            height={"2.5rem"}
            margin={"0 auto"}
            width={"15.188rem"}
            maxWidth={"15.188rem"}
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default MyReferrals;
