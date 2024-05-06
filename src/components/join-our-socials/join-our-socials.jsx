import { Stack } from "@mui/material";
import JoinOurSocialsTop from "./join-our-socials-top";
import YourTasks from "./your-tasks";

function JoinOurSocials() {
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
      <JoinOurSocialsTop />
      <YourTasks />
    </Stack>
  );
}

export default JoinOurSocials;
