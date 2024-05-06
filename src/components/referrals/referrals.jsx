import { Stack } from "@mui/material";
import MyReferrals from "./my-referrals";
import MyReferrerList from "./my-referrer-list";
import { useState } from "react";
import Loading from "./loading";

function Referrals() {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <MyReferrals />
          <MyReferrerList handleClick={handleLoadingClick} />
        </>
      )}
    </Stack>
  );
}

export default Referrals;
