import { useLocation } from "react-router-dom";
// import { PatientService } from '../utils/api';
// import { useState, useEffect } from 'react';
// import PhysiciansList from "./PhysiciansList";

const Physicians = () => {
  const location = useLocation();

  if (location.pathname === "/physicians") {
    return (
      <>
        <h1>Physicians</h1>
        {/* <PhysiciansList /> */}
      </>
    );
  }
};

export default Physicians;