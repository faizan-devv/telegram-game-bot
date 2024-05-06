import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(
  ({ backgroundColor, type }) => ({
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "flex-start",
    height: 18,
    borderRadius: "28px",
    padding: "3px",
    backgroundColor: "#2C2159",
    border: "1px solid #392B6E",
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: "#2C2159",
    //   border: "1px solid #392B6E",
    // },
    [`& .${linearProgressClasses.bar}`]: {
      height: 14,
      borderRadius: "28px",
      background:
        type === "dice"
          ? backgroundColor
          : "linear-gradient(0deg, #2C2159 0%, #5235E8 100%)",
      border: "1px solid #2D2259",
      position: "static",
    },
  })
);

export default function GenericProgressBar({ value, bgColor, type }) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={value}
        backgroundColor={bgColor}
        type={type}
      />
    </Stack>
  );
}
