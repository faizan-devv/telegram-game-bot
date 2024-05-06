import { Box, Button, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function MenuFooter({ handleClick, active }) {
  const matches = useMediaQuery("(max-width:375px)");
  const MenuList = [
    { icon: "/assets/ref-icon.svg", name: "Ref", number: "one" },
    { icon: "/assets/task-icon.svg", name: "Task", number: "two" },
    { icon: "/assets/dice-icon.svg", name: "Roll", number: "three" },
    { icon: "/assets/promote-icon.svg", name: "Promote", number: "four" },
    { icon: "/assets/stats-icon.svg", name: "Stats", number: "five" },
  ];
  return (
    <>
      {" "}
      <Stack
        sx={{
          alignItems: "baseline",
          backgroundColor: "#0A0619",
          display: "flex",
          justifyContent: "center",
          // height: "5rem",
          position: "absolute",
          width: "100%",
          padding: "0.5rem 0 1.75rem",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        <Stack
          boxSizing="border-box"
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
          width="100%"
          px={matches ? "0.5rem" : "1.25rem"}
        >
          {MenuList.map((item, index) => (
            <Box
              key={index}
              sx={{
                background:
                  active === item.number
                    ? "linear-gradient(180deg, #FF5C00 0%, #EAC759 19%, #35DA77 36.5%, #4D81E7 59%, #6B2EA7 76%, #CA56D4 91.5%)"
                    : "none",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                border: active === item.number ? "none" : "1px solid #47397C",
                borderRadius: "0.65rem",
                height: "4.438rem",
                width: matches ? "3.35rem" : "3.813rem",
                padding: active === item.number ? "1px" : "0px",
                "& .btn-hover": {
                  background:
                    active === item.number ? "#16002c" : "transparent",
                  position: "relative",
                  zIndex: 1,
                },
                // "&:hover": {
                //   background: active
                //     ? "linear-gradient(180deg, #FF5C00 0%, #EAC759 19%, #35DA77 36.5%, #4D81E7 59%, #6B2EA7 76%, #CA56D4 91.5%)"
                //     : "none",
                //   border: "none",
                //   padding: "1px",
                // },
              }}
            >
              <Box
                className="btn-hover"
                sx={{
                  borderRadius: "0.6rem",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    alignItems: "center",
                    borderRadius: "0.625rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: 0,
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    textTransform: "capitalize",
                    "& img": {
                      margin: "0 0 0.25rem",
                    },
                  }}
                  onClick={() => handleClick(item.number)}
                >
                  <img src={item.icon} width={35} height={35} alt={item.name} />
                  {item.name}
                </Button>
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default MenuFooter;
