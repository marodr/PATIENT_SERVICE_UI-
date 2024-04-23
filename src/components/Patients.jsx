import { useLocation } from "react-router-dom";
// import { PatientService } from '../utils/api';
// import { useState, useEffect } from 'react';
import PatientsList from "./PatientsList";

const Patients = () => {
  const location = useLocation();
  

  if (location.pathname === "/patients") {
    return (
      <>
        <h1>Patients</h1>
        <PatientsList />
      </>
    );
  }
};
export default Patients;