import { Stack } from "@mui/material";
import GenericCard from "../atoms/generic-card/generic-card";

function TabMission() {
  const MissionList = [
    {
      title: "Basic",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "200000",
      url: "1",
      trophy: "/assets/level-1.svg",
      claim: "Claim",
      progress:'10'
    },
    {
      title: "Intermediate",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "200000",
      url: "2",
      trophy: "/assets/level-1.svg",
      claim: "Claim",
      progress:'50'
    },
    {
      title: "Intermediate",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "200000",
      url: "2",
      trophy: "/assets/level-1.svg",
      claim: "Claim",
      progress:'60'
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
      {MissionList.map((item) => (
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

export default TabMission;
