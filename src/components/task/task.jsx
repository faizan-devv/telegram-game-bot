import { Stack } from "@mui/material";
import PointsCounterLevel from "../common/points-counter-level/points-counter-level";
import TaskTabs from "./task-tabs";
import JoinOurSocials from "../join-our-socials/join-our-socials";
import AddSolanaAddress from "../add-solana-address/add-solana-address";

function Task({ handleJoinSocial, handleAddAddress, joinSocial, addAddress }) {
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
      {joinSocial ? (
        <JoinOurSocials />
      ) : addAddress ? (
        <AddSolanaAddress />
      ) : (
        <>
          {" "}
          <PointsCounterLevel />
          <TaskTabs
            handleJoinSocial={handleJoinSocial}
            handleAddAddress={handleAddAddress}
          />
        </>
      )}
      {}
    </Stack>
  );
}

export default Task;
