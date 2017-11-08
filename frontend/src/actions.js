const addRoom = (room) => ({ type: "room/ADD", room });
const updateRoom = (room) => ({ type: "room/UPDATE", room });

const addRoomType = (roomType) => ({ type: "room-type/ADD", roomType });
const updateRoomType = (roomType) => ({ type: "room-type/UPDATE", roomType });

const addRoomStatus = (roomStatus) => ({ type: "room-status/ADD", roomStatus });
const updateRoomStatus = (roomStatus) => ({ type: "room-status/UPDATE", roomStatus });

const addProcedure = (procedure) => ({type: 'procedure/ADD', procedure});
const updateProcedure = (procedure) => ({type: 'procedure/UPDATE', procedure});

const addPatientStatus = (patientStatus) => ({type: 'patient-status/ADD', patientStatus});
const updatePatientStatus = (patientStatus) => ({type: 'patient-status/UPDATE', patientStatus});

export { 
    addRoom, updateRoom, 
    addRoomType, updateRoomType, 
    addRoomStatus, updateRoomStatus,
    addProcedure, updateProcedure,
    addPatientStatus, updatePatientStatus
};