const loginAttempt = (username, password) => ({type: "session/LOGIN/attempt", username, password});
const loginSuccess = (token, role, expires) => ({type: "session/LOGIN/success", token, role, expires});
const logout = () => ({type: "session/LOGOUT"});

const loadEntities = () => ({type: "entities/LOAD"});
const loadEntitiesStart = () => ({type: "entities/LOAD/start"});
const loadEntitiesFailure = () => ({type: "entities/LOAD/failure"});
const loadEntitiesSuccess = () => ({type: "entities/LOAD/success"});

const networkStart = () => ({type: "network/START"});
const networkStop = () => ({type: "network/STOP"});

const addMessage = (body, message_type="info") => ({type: "message/ADD", body, message_type});
const removeMessage = (id) => ({type: "message/REMOVE", id});

const getRooms = () => ({type: "room/LIST"});
const listRoomsStart = () => ({type: "room/LIST/start"});
const listRoomsFailure = (error) => ({type: "room/LIST/failure", error});
const listRoomsSuccess = (rooms) => ({type: "room/LIST/success", rooms});

const addRoom = (room) => ({ type: "room/ADD", room });
const addRoomStart = () => ({type: "room/ADD/start"});
const addRoomFailure = (error) => ({type: "room/ADD/failure", error});
const addRoomSuccess = (room) => ({type: "room/ADD/success", room});

const updateRoom = (room) => ({ type: "room/UPDATE", room });
const updateRoomStart = () => ({type: "room/UPDATE/start"});
const updateRoomFailure = (error) => ({type: "room/UPDATE/failure", error});
const updateRoomSuccess = (room) => ({type: "room/UPDATE/success", room});

const getRoomTypes = () => ({type: "room-type/LIST"});
const listRoomTypesStart = () => ({type: "room-type/LIST/start"});
const listRoomTypesFailure = (error) => ({type: "room-type/LIST/failure", error});
const listRoomTypesSuccess = (room_types) => ({type: "room-type/LIST/success", room_types});

const dismissRoomError = () => ({type: "room/ERROR/dismiss"});

const addRoomType = (roomType) => ({ type: "room-type/ADD", roomType });
const addedRoomType = (roomType) => ({ type: 'room-type/ADDED', roomType });

const updateRoomType = (roomType) => ({ type: "room-type/UPDATE", roomType });
const updatedRoomType = (roomType) => ({ type: "room-type/UPDATED", roomType });

const listRoomTypeStatuses = () => ({type: "room-type-status/LIST"});
const listedRoomTypeStatuses = (roomTypeStatuses) => ({type: "room-type-status/LISTED", roomTypeStatuses});

const addRoomTypeStatus = (roomTypeStatus) => ({type: "room-type-status/ADD",roomTypeStatus});
const addedRoomTypeStatus = (roomTypeStatus) => ({type: "room-type-status/ADDED",roomTypeStatus});
const updateRoomTypeStatus = (roomTypeStatus) => ({type: "room-type-status/UPDATE",roomTypeStatus});
const updatedRoomTypeStatus = (roomTypeStatus) => ({type: "room-type-status/UPDATED",roomTypeStatus});

const updateRoomStatus = (roomId, status) => ({ type: "room/status/UPDATE", roomId, status });
const updateRoomStatusStart = () => ({type: "room/status/UPDATE/start"});
const updateRoomStatusFailure = (error) => ({type: "room/status/UPDATE/failure", error});
const updateRoomStatusSuccess = (roomId, status) => ({type: "room/status/UPDATE/success", roomId, status});

const addProcedure = (procedure) => ({type: 'procedure/ADD', procedure});
const updateProcedure = (procedure) => ({type: 'procedure/UPDATE', procedure});
const listProcedures = () => ({type: "procedure/LIST"});
const listedProcedures = (procedures) => ({type: "procedure/LISTED", procedures});

const listProcedureStatuses = () => ({type:"procedure-status/LIST"});
const listedProcedureStatuses = (procedureStatuses) => ({type:"procedure-status/LISTED", procedureStatuses});

const addPatientStatus = (patientStatus) => ({type: 'patient-status/ADD', patientStatus});
const updatePatientStatus = (patientStatus) => ({type: 'patient-status/UPDATE', patientStatus});

export {
    loginAttempt, loginSuccess, logout,
    addMessage, removeMessage,
    networkStart, networkStop,
    loadEntities, loadEntitiesStart, loadEntitiesFailure, loadEntitiesSuccess,
    dismissRoomError,
    getRooms, listRoomsStart, listRoomsFailure, listRoomsSuccess,
    addRoom, addRoomStart, addRoomFailure, addRoomSuccess,
    updateRoom, updateRoomStart, updateRoomFailure, updateRoomSuccess,
    getRoomTypes, listRoomTypesStart, listRoomTypesFailure, listRoomTypesSuccess,
    
    listRoomTypeStatuses, listedRoomTypeStatuses,
    addRoomTypeStatus, addedRoomTypeStatus,
    updateRoomTypeStatus, updatedRoomTypeStatus,
    
    listProcedures, listedProcedures,
    listProcedureStatuses, listedProcedureStatuses,
    
    addRoomType, addedRoomType,
    updateRoomType, updatedRoomType,
    
    updateRoomStatus, updateRoomStatusStart, updateRoomStatusFailure, updateRoomStatusSuccess,
    
    addProcedure, updateProcedure,
    addPatientStatus, updatePatientStatus
};