import { Box, Button, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

function YourTasks() {
  const TasksList = [
    {
      icon: <TelegramIcon />,
      title: "Join the Telegram Chat",
      link: "Join",
      btnText: "Join now",
    },
    {
      icon: <XIcon />,
      title: "Follow X handle",
      link: "Join",
      btnText: "Follow",
    },
    {
      icon: <InstagramIcon />,
      title: "Follow Insta handle",
      link: "Join",
      btnText: "Follow",
    },
    {
      icon: <LanguageIcon />,
      title: "Visit website",
      link: "Join",
      btnText: "Visit",
    },
    {
      icon: <LanguageIcon />,
      title: "Visit website",
      link: "Join",
      btnText: "Visit",
    },
  ];
  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: "0.5rem",
        position: "relative",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "1.25rem",
          fontWeight: 700,
          mb: "1rem",
        }}
      >
        Your Tasks
      </Typography>
      {TasksList.map((item, index) => (
        <Box
          sx={{
            alignItems: "center",
            boxSizing: "border-box",
            backgroundColor: "#100523",
            border: "1px solid #36065f",
            borderRadius: "0.938rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            my: "0.625rem",
            padding: "1rem",
            width: "100%",
          }}
        >
          <Typography
            alignItems="center"
            display="flex"
            justifyContent="flex-start"
            color="white"
            fontSize="1rem"
            fontFamily={"Inter"}
            fontWeight="500"
            sx={{
              "& svg": {
                mr: 1,
              },
            }}
          >
            {item.icon} {item.title}
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#260053",
                border: "1px solid #48009c",
                borderRadius: "2rem",
                color: "white",
                minWidth: "0",
                fontWeight: 500,
                fontFamily: "Inter",
                height: "2rem",
                margin: 0,
                width: "5.375rem",
                maxWidth: "5.375rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#260053",
                  border: "1px soild #48009c",
                },
              }}
              // onClick={handleClick}
            >
              {item.btnText}
            </Button>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

export default YourTasks;
