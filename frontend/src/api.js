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

    console.log(`Sending request to ${url} with options: `, options);

    return fetch(url, options);
} 

const getPatients = () => {
    return makeRequest("/admin/patient");
}

const getRooms = () => {
    return makeRequest("/admin/room");
}

const getRoomTypes = () => {
    return makeRequest("/admin/room_type");
}

const getRoomTypeStatuses = () => {
    return makeRequest("/admin/room_type_status");
}

const updateRoomStatus = (roomId, room) => {
    return makeRequest(`/admin/room/${roomId}`, room, "PUT")
}

const getProcedures = () => {
    return makeRequest("/admin/procedure");
}

const getProcedureStatuses = () => {
    return makeRequest("/admin/procedure_status");
}

const getWaitingRoomData = () => {
    return fetch(ENDPOINT + "/waitingroom");
}

export {getWaitingRoomData, getPatients, getRooms, getRoomTypes, getRoomTypeStatuses, updateRoomStatus, getProcedures, getProcedureStatuses};