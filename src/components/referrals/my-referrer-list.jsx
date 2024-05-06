import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GenericProgressBar from "../atoms/generic-progress-bar/generic-progress-bar";
import GenericButton from "../atoms/generic-button/generic-button";

function MyReferrerList({ handleClick }) {
  const MyReferralList = [
    {
      refereeName: "Lisa Nicole",
      winningIcon: "",
      level: "Basic",
      coinIcon: "",
      totalAmount: "200000",
      point: "+2000",
      progress: "45",
    },
    {
      refereeName: "John Wilson",
      winningIcon: "",
      level: "Intermediate",
      coinIcon: "",
      totalAmount: "200000",
      point: "+7000",
      progress: "90",
    },
    {
      refereeName: "Lisa Nicole",
      winningIcon: "",
      level: "Basic",
      coinIcon: "",
      totalAmount: "200000",
      point: "+2000",
      progress: "80",
    },
    {
      refereeName: "John Wilson Last",
      winningIcon: "",
      level: "Intermediate",
      coinIcon: "",
      totalAmount: "200000",
      point: "+7000",
      progress: "10",
    },
  ];
  return (
    <Box
      className="hide-scroll"
      sx={{
        height: "25rem",
        mt: "1rem",
        overflowY: "auto",
        width: "100%",
      }}
    >
      {MyReferralList.map((item, index) => (
        <Stack
          key={index}
          sx={{
            alignItems: "center",
            backgroundColor: "#1F154599",
            border: "1px solid #2D2259",
            boxSizing: "border-box",
            borderRadius: "1.25rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "0 0 1rem",
            position: "relative",
            padding: "1.25rem",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: "Inter",
                  mb: "1rem",
                }}
              >
                {item.refereeName}
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src="/assets/trophy-icon.svg"
                  width={16}
                  height={18}
                  alt="trophy"
                />
                <Typography
                  sx={{
                    color: "#ffffff7d",
                    fontSize: "0.75rem",
                    mx: "0.5rem",
                  }}
                >
                  {item.level}
                </Typography>
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
                  {item.totalAmount}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
                "& svg": {
                  color: "white",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#D49A34",
                  fontSize: "0.875rem",
                  fontFamily: "Inria Sans",
                  mr: "0.25rem",
                }}
              >
                {item.point}
              </Typography>
              <GenericButton
                text={<KeyboardArrowRightIcon />}
                width={"1rem"}
                height={"1rem"}
                handleClick={handleClick}
              />
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            mt="1.5rem"
            width={"100%"}
          >
            <GenericProgressBar value={item.progress} />
          </Box>
        </Stack>
      ))}
    </Box>
  );
}

export default MyReferrerList;
