import { Box } from "@mui/material";
import Promote from "../promote/promote";
import Referrals from "../referrals/referrals";
import Roll from "../roll/roll";
import Stats from "../stats/stats";
import Task from "../task/task";

function MainContent({
  active,
  handleJoinSocial,
  handleAddAddress,
  joinSocial,
  addAddress,
}) {
  return (
    <Box
      className="content"
      sx={{
        height: "82vh",
        display: "block",
        overflowY: "auto",
      }}
    >
      <div style={{ display: active === "one" ? "block" : "none" }}>
        <Referrals />
      </div>
      <div style={{ display: active === "two" ? "block" : "none" }}>
        <Task
          handleJoinSocial={handleJoinSocial}
          handleAddAddress={handleAddAddress}
          joinSocial={joinSocial}
          addAddress={addAddress}
        />
      </div>
      <div style={{ display: active === "three" ? "block" : "none" }}>
        <Roll />
      </div>
      <div style={{ display: active === "four" ? "block" : "none" }}>
        <Promote />
      </div>
      <div style={{ display: active === "five" ? "block" : "none" }}>
        <Stats />
      </div>
    </Box>
  );
}

export default MainContent;
