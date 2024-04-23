import axios from "axios";

// export const BASE_URL = process.env.PATIENT_SERVICE_API_BASE_URL;
export const BASE_URL = "https://localhost:8000";


const PatientService = {
    getAllPatients: async () => {
        const patients = await axios.request({
            url: `${BASE_URL}/patients`,
        });
        const patientsList = patients.map((patient) => {
            return {
                ...patient,
                full_name: patient.first_name + " " + patient.last_name,
            };

        });
        return patientsList;
    },
    getPatientByPatientId: (id) => {
        

    },
    updatePatient: (patient) => {

    }


}



export { PatientService };