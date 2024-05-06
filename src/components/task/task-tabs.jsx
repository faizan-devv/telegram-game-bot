import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabSpecial from "./tab-special";
import TabMission from "./tab-mission";
import TabRefTasks from "./tab-ref-tasks";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: "1rem" }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TaskTabs({ handleJoinSocial, handleAddAddress }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: "2rem", width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            border: "1px solid #5235E8",
            borderRadius: "2rem",
            minHeight: "2.5rem",
            "& button": {
              borderRadius: "2rem",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 500,
              fontFamily: "Inter",
              minHeight: "2.5rem",
              textTransform: "none",
              width: "33.33%",
            },
            "& .Mui-selected": {
              backgroundColor: "#5235E8",
              color: "white !important",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Special" {...a11yProps(0)} />
          <Tab label="Mission" {...a11yProps(1)} />
          <Tab label="Ref Tasks" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabSpecial
          handleJoinSocial={handleJoinSocial}
          handleAddAddress={handleAddAddress}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabMission />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabRefTasks />
      </CustomTabPanel>
    </Box>
  );
}
