import { Box } from "@mui/material";

function WinningLevels() {
  const WinningLevel = [
    { trophy: "/assets/level-1.svg" },
    { trophy: "/assets/level-2.svg" },
    { trophy: "/assets/level-3.svg" },
    { trophy: "/assets/level-3.svg" },
  ];
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem 0 0",
        maxWidth: "19.375rem",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {WinningLevel.map((item, index) => (
          <Box
            key={index}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-start",
              height: "3.5rem",
              width: "3.625rem",
              position: "relative",
            }}
          >
            <Box>
              <img
                src="/assets/dice-icon.svg"
                width={44}
                height={50}
                alt="dice"
                style={{
                  filter: "blur(2px)",
                }}
              />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#2C2159",
                border: "1px solid #392B6E",
                borderRadius: "2rem",
                height: "1.459rem",
                width: "1.459rem",
                position: "absolute",
                bottom: "0.35rem",
                right: "0.35rem",
              }}
            >
              <img src={item.trophy} width={13} height={15} alt="trophy" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default WinningLevels;
