import { Stack } from "@mui/material";
import GenericCard from "../atoms/generic-card/generic-card";

function TabRefTasks() {
  const RefTasksList = [
    {
      title: "Invite 1 Friend",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "25000",
      url: "1",
      trophy: "",
      claim: "Claim",
      progress: "10",
    },
    {
      title: "Invite 5 Friend",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "150000",
      url: "2",
      trophy: "",
      claim: "Claim",
      progress: "50",
    },
    {
      title: "Invite 10 Friend",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "300000",
      url: "2",
      trophy: "",
      claim: "Claim",
      progress: "60",
    },
  ];
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
      {RefTasksList.map((item) => (
        <GenericCard
          title={item.title}
          coinIcon={item.coinIcon}
          coinAmount={item.coinAmount}
          url={""}
          trophy={item.trophy}
          claim={item.claim}
          progress={item.progress}
        />
      ))}
    </Stack>
  );
}

export default TabRefTasks;
