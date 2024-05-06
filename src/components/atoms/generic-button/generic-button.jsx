import { Button } from "@mui/material";

function GenericButton({
  text,
  bgColor,
  radius,
  border,
  color,
  height,
  margin,
  width,
  maxWidth,
  handleClick,
}) {
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        borderRadius: radius,
        border: border,
        color: color,
        minWidth: "0",
        fontWeight: 500,
        fontFamily: "Inter",
        height: height,
        margin: margin,
        width: width,
        maxWidth: maxWidth,
        textTransform: "none",
        "& svg": {
          color: "white",
        },
        "&:hover": {
          backgroundColor: bgColor,
          border: border,
        },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default GenericButton;
