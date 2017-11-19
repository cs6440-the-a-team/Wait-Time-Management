import "whatwg-fetch"
import base64 from "base-64"

import store from "./reducers"

let ENDPOINT = window.location.origin + "/api";

const makeRequest = (path, data=null, method="GET") => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + store.getState().session.get('token'));

    let options = {
        method,
        headers
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    let url = ENDPOINT + path;

    //console.log(`Sending request to ${url} with options: `, options);

    return fetch(url, options);
} 

const getPatients = () => {
    return makeRequest("/admin/patient");
}
const addPatient = (patient) => {
    return makeRequest(`/admin/patient`, patient, "POST");
}
const updatePatient = (patient) => {
    return makeRequest(`/admin/patient/${patient.patient_id}`, patient, "PUT");
}
const deletePatient = (patientId) => {
    return makeRequest(`/admin/patient/${patientId}`, null, "DELETE");
}

const updatePatientStatus = (patientId, patient) => {
    return updatePatient(patient);
}

const getRooms = () => {
    return makeRequest("/admin/room");
}
const addRoom = (room) => {
    return makeRequest(`/admin/room`, room, "POST");
}
const updateRoom = (room) => {
    return makeRequest(`/admin/room/${room.room_id}`, room, "PUT");
}
const deleteRoom = (roomId) => {
    return makeRequest(`/admin/room/${roomId}`, null, "DELETE");
}

const getRoomTypes = () => {
    return makeRequest("/admin/room_type");
}
const addRoomType = (roomType) => {
    return makeRequest(`/admin/room_type`, roomType, "POST");
}
const updateRoomType = (roomType) => {
    return makeRequest(`/admin/room_type/${roomType.room_type_id}`, roomType, "PUT");
}
const deleteRoomType = (roomTypeId) => {
    return makeRequest(`/admin/room_type/${roomTypeId}`, null, "DELETE");
}

const getRoomTypeStatuses = () => {
    return makeRequest("/admin/room_type_status");
}
const addRoomTypeStatus = (roomTypeStatus) => {
    return makeRequest(`/admin/room_type_status`, roomTypeStatus, "POST");
}
const updateRoomTypeStatus = (roomTypeStatus) => {
    return makeRequest(`/admin/room_type_status/${roomTypeStatus.room_status_id}`, roomTypeStatus, "PUT");
}
const deleteRoomTypeStatus = (roomTypeStatusId) => {
    return makeRequest(`/admin/room_type_status/${roomTypeStatusId}`, null, "DELETE");
}

const updateRoomStatus = (roomId, room) => {
    return updateRoom(room);
}

const getProcedures = () => {
    return makeRequest("/admin/procedure");
}
const addProcedure = (procedure) => {
    return makeRequest(`/admin/procedure`, procedure, "POST");
}
const updateProcedure = (procedure) => {
    return makeRequest(`/admin/procedure/${procedure.procedure_id}`, procedure, "PUT");
}
const deleteProcedure = (procedureId) => {
    return makeRequest(`/admin/procedure/${procedureId}`, null, "DELETE");
}

const getProcedureStatuses = () => {
    return makeRequest("/admin/procedure_status");
}
const addProcedureStatus = (procedureStatus) => {
    return makeRequest(`/admin/procedure_status`, procedureStatus, "POST");
}
const updateProcedureStatus = (procedureStatus) => {
    return makeRequest(`/admin/procedure_status/${procedureStatus.procedure_status_id}`, procedureStatus, "PUT");
}
const deleteProcedureStatus = (procedureStatusId) => {
    return makeRequest(`/admin/procedure_status/${procedureStatusId}`, null, "DELETE");
}

export {
    getPatients, addPatient, updatePatient, deletePatient,
    getRooms, addRoom, updateRoom, deleteRoom,
    getRoomTypes, addRoomType, updateRoomType, deleteRoomType,
    getRoomTypeStatuses, addRoomTypeStatus, updateRoomTypeStatus, deleteRoomTypeStatus,
    updateRoomStatus, 
    updatePatientStatus,
    getProcedures, addProcedure, updateProcedure, deleteProcedure,
    getProcedureStatuses, addProcedureStatus, updateProcedureStatus, deleteProcedureStatus
};