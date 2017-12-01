const loginAttempt = (username, password) => ({ type: "session/LOGIN/attempt", username, password });
const loginSuccess = (token, role, expires) => ({ type: "session/LOGIN/success", token, role, expires });
const logout = () => ({ type: "session/LOGOUT" });

const loadEntities = () => ({ type: "entities/LOAD" });
const loadEntitiesStart = () => ({ type: "entities/LOAD/start" });
const loadEntitiesFailure = () => ({ type: "entities/LOAD/failure" });
const loadEntitiesSuccess = () => ({ type: "entities/LOAD/success" });

const networkStart = () => ({ type: "network/START" });
const networkStop = () => ({ type: "network/STOP" });

const addMessage = (body, messageType = "info") => ({ type: "message/ADD", body, messageType });
const removeMessage = (id) => ({ type: "message/REMOVE", id });
const addErrorMessage = (body) => ({ type: "message/ADD", body, messageType: "error" });
const addInfoMessage = (body) => ({ type: "message/ADD", body, messageType: "info" });
const addWarningMessage = (body) => ({ type: "message/ADD", body, messageType: "warning" });
const addSuccessMessage = (body) => ({ type: "message/ADD", body, messageType: "success" });

const listRooms = () => ({ type: "room/LIST" });
const listedRooms = (rooms) => ({ type: "room/LISTED", rooms });
const addRoom = (room) => ({ type: "room/ADD", room });
const addedRoom = (room) => ({ type: "room/ADDED", room });
const updateRoom = (room) => ({ type: "room/UPDATE", room });
const updatedRoom = (room) => ({ type: "room/UPDATED", room });
const deleteRoom = (roomId) => ({ type: "room/DELETE", roomId });
const deletedRoom = (roomId) => ({ type: "room/DELETED", roomId });

const listRoomTypes = () => ({ type: "room-type/LIST" });
const listedRoomTypes = (roomTypes) => ({ type: "room-type/LISTED", roomTypes });
const addRoomType = (roomType) => ({ type: "room-type/ADD", roomType });
const addedRoomType = (roomType) => ({ type: 'room-type/ADDED', roomType });
const updateRoomType = (roomType) => ({ type: "room-type/UPDATE", roomType });
const updatedRoomType = (roomType) => ({ type: "room-type/UPDATED", roomType });
const deleteRoomType = (roomTypeId) => ({ type: "room-type/DELETE", roomTypeId });
const deletedRoomType = (roomTypeId) => ({ type: "room-type/DELETED", roomTypeId });

const listRoomTypeStatuses = () => ({ type: "room-type-status/LIST" });
const listedRoomTypeStatuses = (roomTypeStatuses) => ({ type: "room-type-status/LISTED", roomTypeStatuses });
const addRoomTypeStatus = (roomTypeStatus) => ({ type: "room-type-status/ADD", roomTypeStatus });
const addedRoomTypeStatus = (roomTypeStatus) => ({ type: "room-type-status/ADDED", roomTypeStatus });
const updateRoomTypeStatus = (roomTypeStatus) => ({ type: "room-type-status/UPDATE", roomTypeStatus });
const updatedRoomTypeStatus = (roomTypeStatus) => ({ type: "room-type-status/UPDATED", roomTypeStatus });
const deleteRoomTypeStatus = (roomTypeStatusId) => ({ type: "room-type-status/DELETE", roomTypeStatusId });
const deletedRoomTypeStatus = (roomTypeStatusId) => ({ type: "room-type-status/DELETED", roomTypeStatusId });

const updateRoomStatus = (roomId, roomStatusId) => ({ type: "room/status/UPDATE", roomId, roomStatusId });
const updatedRoomStatus = (roomId, roomStatusId, startTime) => ({ type: "room/status/UPDATED", roomId, roomStatusId, startTime });

const listProcedures = () => ({ type: "procedure/LIST" });
const listedProcedures = (procedures) => ({ type: "procedure/LISTED", procedures });
const addProcedure = (procedure) => ({ type: 'procedure/ADD', procedure });
const addedProcedure = (procedure) => ({ type: 'procedure/ADDED', procedure });
const updateProcedure = (procedure) => ({ type: 'procedure/UPDATE', procedure });
const updatedProcedure = (procedure) => ({ type: 'procedure/UPDATED', procedure });
const deleteProcedure = (procedureId) => ({ type: 'procedure/DELETE', procedureId});
const deletedProcedure = (procedureId) => ({ type: 'procedure/DELETED', procedureId});

const listProcedureStatuses = () => ({ type: "procedure-status/LIST" });
const listedProcedureStatuses = (procedureStatuses) => ({ type: "procedure-status/LISTED", procedureStatuses });
const addProcedureStatus = (procedureStatus) => ({ type: "procedure-status/ADD", procedureStatus });
const addedProcedureStatus = (procedureStatus) => ({ type: "procedure-status/ADDED", procedureStatus });
const updateProcedureStatus = (procedureStatus) => ({ type: "procedure-status/UPDATE", procedureStatus });
const updatedProcedureStatus = (procedureStatus) => ({ type: "procedure-status/UPDATED", procedureStatus });
const deleteProcedureStatus = (procedureStatusId) => ({ type: "procedure-status/DELETE", procedureStatusId});
const deletedProcedureStatus = (procedureStatusId) => ({ type: "procedure-status/DELETED", procedureStatusId});

const listPatients = () => ({ type: "patient/LIST" });
const listedPatients = (patients) => ({ type: "patient/LISTED", patients });
const addPatient = (patient) => ({ type: "patient/ADD", patient });
const addedPatient = (patient) => ({ type: "patient/ADDED", patient });
const updatePatient = (patient) => ({ type: "patient/UPDATE", patient });
const updatedPatient = (patient) => ({ type: "patient/UPDATED", patient });
const deletePatient = (patientId) => ({type: "patient/DELETE", patientId});
const deletedPatient = (patientId) => ({type: "patient/DELETED", patientId});

const showPatientCard = (patientId) => ({ type: "patient/show-card", patientId });
const dismissPatientCard = () => ({ type: "patient/dismiss-card" });

const updatePatientStatus = (patientId, procedureStatusId) => ({ type: 'patient/status/UPDATE', patientId, procedureStatusId });
const updatedPatientStatus = (patientId, procedureStatusId) => ({ type: 'patient/status/UPDATED', patientId, procedureStatusId });

export {
    loginAttempt, loginSuccess, logout,

    addMessage, removeMessage, addErrorMessage, addWarningMessage, addInfoMessage, addSuccessMessage,

    networkStart, networkStop,

    loadEntities, loadEntitiesStart, loadEntitiesFailure, loadEntitiesSuccess,

    listRooms, listedRooms,
    addRoom, addedRoom,
    updateRoom, updatedRoom,
    deleteRoom, deletedRoom,

    listRoomTypes, listedRoomTypes,
    addRoomType, addedRoomType,
    updateRoomType, updatedRoomType,
    deleteRoomType, deletedRoomType,

    listRoomTypeStatuses, listedRoomTypeStatuses,
    addRoomTypeStatus, addedRoomTypeStatus,
    updateRoomTypeStatus, updatedRoomTypeStatus,
    deleteRoomTypeStatus, deletedRoomTypeStatus,

    listProcedures, listedProcedures,
    addProcedure, addedProcedure,
    updateProcedure, updatedProcedure,
    deleteProcedure, deletedProcedure,

    listProcedureStatuses, listedProcedureStatuses,
    addProcedureStatus, addedProcedureStatus,
    updateProcedureStatus, updatedProcedureStatus,
    deleteProcedureStatus, deletedProcedureStatus,

    listPatients, listedPatients,
    addPatient, addedPatient,
    updatePatient, updatedPatient,
    deletePatient, deletedPatient,
    showPatientCard, dismissPatientCard,

    updateRoomStatus, updatedRoomStatus,
    updatePatientStatus, updatedPatientStatus
};