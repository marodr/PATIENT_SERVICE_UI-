import Box from "@mui/material/Box";
import React from "react";
import SideList from "./SideList";
import {
  appContentWrapper,
  flexColumnGrow,
  sideListWrapper,
} from "@styles/styles";
import Patients from "./Patients";
import Physicians from "./Physicians";
import Hospitals from "./Hospitals"
import Appointments from "./Appointments"
import Home from "./Home"
import Nurses from "./Nurses"

const AppContentArea = ({ isOpen }) => {
  const sideBarWidth = isOpen ? "70px" : "250px";

  return (
    <>
      <Box component="main" sx={appContentWrapper}>
        <Box
          component="div"
          sx={{
            flexBasis: sideBarWidth,
            flexGrow: 0,
            flexShrink: 0,
            overflowY: "auto",
            ...sideListWrapper,
          }}
        >
          <SideList />
        </Box>
        <Box component="div" sx={flexColumnGrow}>
          <Box
            sx={{
              my: 2,
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <Patients />
            <Nurses />
            <Hospitals />
            <Home />
            <Appointments />
            <Physicians />
          </Box>
          <Box
            component="div"
            sx={{
              display: "block",
              p: 2,
              minHeight: "100px",
              mb: 4,
              overflow: "hidden",
              overflowY: "auto",
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            &nbsp;
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppContentArea;