import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GenericProgressBar from "../generic-progress-bar/generic-progress-bar";

function GenericCard({
  title,
  coinIcon,
  coinAmount,
  handleClick,
  trophy,
  claim,
  progress,
}) {
  return (
    <Stack
      sx={{
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "#1F154599",
        border: "1px solid #2D2259",
        borderRadius: "0.938rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mb: "1rem",
        padding: "1rem",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-start",
            width: "75%",
          }}
        >
          {trophy && (
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-start",
                mr: "1.25rem",
              }}
            >
              <img src={trophy} width={31} height={34} alt="trophy" />
            </Box>
          )}

          <Box>
            <Typography
              color="white"
              fontSize="1rem"
              fontFamily={"Inter"}
              fontWeight="500"
              mb="0.5rem"
            >
              {title}
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <img src={coinIcon} width={20} height={20} alt="dollar" />
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
                {coinAmount}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            width: "25%",
          }}
        >
          {handleClick && (
            <Button
              sx={{
                minWidth: "0",
                fontWeight: 500,
                fontFamily: "Inter",
                height: "1.5rem",
                margin: 0,
                width: "1.5rem",
                maxWidth: "1.5rem",
                textTransform: "none",
                "& svg": {
                  color: "#ffffffbd",
                },
              }}
              onClick={handleClick}
            >
              <ArrowForwardIcon />
            </Button>
          )}
          {claim && (
            <Button
              sx={{
                backgroundColor: "#5235E842",
                border: "1px solid #5235E880",
                borderRadius: "2rem",
                minWidth: "0",
                fontWeight: 500,
                fontFamily: "Inter",
                height: "2rem",
                margin: 0,
                width: "5.375rem",
                maxWidth: "5.375rem",
                textTransform: "none",
                "& svg": {
                  color: "#ffffffbd",
                },
                "&:hover": {
                  backgroundColor: "#5235E842",
                  border: "1px soild #5235E880",
                },
              }}
              // onClick={handleClick}
            >
              {claim}
            </Button>
          )}
        </Box>
      </Box>
      {progress && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt="1.5rem"
          width={"100%"}
        >
          <GenericProgressBar value={progress} />
        </Box>
      )}
    </Stack>
  );
}

export default GenericCard;
