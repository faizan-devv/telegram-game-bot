import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header({ handleClose, joinSocial, addAddress }) {
  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "75%",
        }}
      >
        <Button
          sx={{
            minWidth: "1.5rem",
            height: "1.5rem",
            width: "1.5rem",
            "& svg": {
              color: "white",
            },
          }}
          onClick={handleClose}
        >
          {joinSocial || addAddress ? <ArrowBackIcon /> : <CloseIcon />}
        </Button>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 700,
            ml: "1rem",
          }}
        >
          Chance Drip
        </Typography>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="flex-end"
        width="25%"
      >
        <Button
          sx={{
            minWidth: "1.5rem",
            height: "1.5rem",
            width: "1.5rem",
            "& svg": {
              color: "white",
            },
          }}
        >
          <MoreVertIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default Header;
