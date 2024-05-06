import { Stack } from "@mui/material";
import AddSolanaAddressTop from "./add-solana-address-top";
import YourTasks from "./your-tasks";

function AddSolanaAddress() {
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
      <AddSolanaAddressTop />
      <YourTasks />
    </Stack>
  );
}

export default AddSolanaAddress;
