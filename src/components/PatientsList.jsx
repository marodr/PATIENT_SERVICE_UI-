import { useState, useEffect } from 'react';
import { PatientService } from '../utils/api';
import { DataGrid } from '@mui/x-data-grid';

const PatientsList = () => {
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try{
                // try to get data from the api
                const data = await PatientService.getAllPatients();
                console.log(data);
                setPatientData(data);

            }catch(error){
                console.log('Failed to fetch patients', error);
            }

        }
        fetchPatients();
    }, [])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'full_name', headerName: 'Full Name', width: 200 },
        { field: 'dob', headerName: 'Date of Birth', width: 110 },
        { field: 'gender', headerName: 'Gender', width: 90 },
        { field: 'physician_id', headerName: 'Physician ID', width: 110 },
        { field: 'ssn', headerName: 'SSN', width: 130 },
        { field: 'address', headerName: 'Address', width: 200 },
      ];

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
            rows={patientData}
            columns={columns}
            pageSize={5}
            checkboxSelection
            />
        </div>
    )
};
export default PatientsList;