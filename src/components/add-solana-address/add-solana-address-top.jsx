import { Box, Stack, Typography } from "@mui/material";

function AddSolanaAddressTop() {
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
        Connect Solana Wallet
      </Typography>
      <Typography
        sx={{
          color: "#ffffff7d",
          fontSize: "1rem",
          mt: "1rem",
        }}
      >
        Login to ChanceDrip with your Solana Wallet. All peoject and partner
        drops will be sent to the wallet you provide here.
      </Typography>
      <Typography
        sx={{
          color: "#ffffff7d",
          fontSize: "1rem",
          mt: "1rem",
        }}
      >
        If you don't have a Solana Wallet, you can download the Phantom wallet
        from https://phantom.app/ or feel free to download any other legitimate
        Solana Wallets
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

export default AddSolanaAddressTop;
