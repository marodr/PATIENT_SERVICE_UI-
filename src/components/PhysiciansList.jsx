// import { useState, useEffect } from 'react';
// import { PhysicianService } from '../utils/api';
// import { DataGrid } from '@mui/x-data-grid';

// const PhysiciansList = () => {
//     const [physicianData, setPhysicianData] = useState([]);

//     useEffect(() => {
//         const fetchPhysicians = async () => {
//             try{
//                 // try to get data from the api
//                 const data = await PhysicianService.getAllPhysicians();
//                 console.log(data);
//                 setPhysicianData(data);

//             }catch(error){
//                 console.log('Failed to fetch physician', error);
//             }

//         }
//         fetchPhysicians();
//     }, [])
//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'specialty', headerName: 'Specialty', width: 255 },
//       ];

//     return (
//         <div style={{height: 400, width: '100%'}}>
//             <DataGrid
//             rows={physicianData}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//             />
//         </div>
//     )
// };
// export default PhysiciansList;