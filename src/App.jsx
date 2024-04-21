import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "@navigation/AppNavMenu";
import AppContentArea from "@components/AppContentArea";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "./components/Patients";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <BrowserRouter>
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen} />
    </Box>
    <Routes>
      <Route path="/patients" element={<Patients />} />
    </Routes>
  </BrowserRouter>
    
  );
};


export default App;
