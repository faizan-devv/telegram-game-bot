import { Stack } from "@mui/material";
import GenericCard from "../atoms/generic-card/generic-card";

function TabSpecial({ handleJoinSocial, handleAddAddress }) {
  const SpecialList = [
    {
      title: "Join Our Socials",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "200000",
      handleClick: handleJoinSocial,
    },
    {
      title: "Add Solana Address",
      coinIcon: "/assets/dollar-icon.svg",
      coinAmount: "200000",
      handleClick: handleAddAddress,
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
      {SpecialList.map((item) => (
        <GenericCard
          title={item.title}
          coinIcon={item.coinIcon}
          coinAmount={item.coinAmount}
          handleClick={item.handleClick}
        />
      ))}
    </Stack>
  );
}

export default TabSpecial;
