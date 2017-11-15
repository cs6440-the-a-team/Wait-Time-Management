import {all, call, put, select, takeLatest} from "redux-saga/effects"
import {makeRequest} from "./network"

import * as Api from "../api"
import {
    listedRooms, addedRoom, updatedRoom,
    listedRoomTypes, addedRoomType, updatedRoomType,
    listedRoomTypeStatuses, addedRoomTypeStatus, updatedRoomTypeStatus,
    updatedRoomStatus, addMessage
} from "../actions"

function* listRooms(action) {
    try {
        let rooms = yield makeRequest(Api.getRooms);
        yield put(listedRooms(rooms));
    }
    catch(err) {
        yield put(addMessage("Failed to list rooms -- " + err, "error"));
    }
}
function* addRoom(action) {
    try {
        let room = yield makeRequest(Api.addRoom, [action.room]);
        yield put(addedRoom(room));
    }
    catch(err) {
        yield put(addMessage("Failed to add room -- " + err, "error"));
    }
}
function* updateRoom(action) {
    try {
        //console.log("Sending update room request: ", action);
        let updatedRoom = yield makeRequest(Api.updateRoom, [action.room]);
        yield put(updatedRoom(updatedRoom));
    }
    catch(err) {
        yield put(addMessage("Failed to update room --" + err, "error"));
    }
}

function* listRoomTypes(action) {
    try {
        let roomTypes = yield makeRequest(Api.getRoomTypes);
        yield put(listedRoomTypes(roomTypes));
    }
    catch(err) {
        yield put(addMessage("Failed to list room types -- " + err, "error"));
    }
}
function* addRoomType(action) {
    try {
        let roomType = yield makeRequest(Api.addRoomType, [action.roomType]);
        yield put(addedRoomType(roomType));
    }
    catch(err) {
        yield put(addMessage("Failed to add room type -- " + err, "error"));
    }
}
function* updateRoomType(action) {
    try {
        let updatedRoomType = yield makeRequest(Api.updateRoomType, [action.roomType]);
        yield put(updatedRoomType(updatedRoomType));
    }
    catch(err) {
        yield put(addMessage("Failed to update room type --" + err, "error"));
    }
}

function* listRoomTypeStatuses(action) {
    try {
        let room_type_statuses = yield makeRequest(Api.getRoomTypeStatuses);
        yield put(listedRoomTypeStatuses(room_type_statuses));
    }
    catch(err) {
        yield put(addMessage("Failed to list room type statuses -- " + err, "error"));
    }
}
function* addRoomTypeStatus(action) {
    try {
        let roomTypeStatus = yield makeRequest(Api.addRoomTypeStatus, [action.roomTypeStatus]);
        yield put(addedRoomType(roomTypeStatus));
    }
    catch(err) {
        yield put(addMessage("Failed to add room type status -- " + err, "error"));
    }
}
function* updateRoomTypeStatus(action) {
    try {
        let updatedRoomTypeStatus = yield makeRequest(Api.updateRoomTypeStatus, [action.roomTypeStatus]);
        yield put(updatedRoomTypeStatus(updatedRoomTypeStatus));
    }
    catch(err) {
        yield put(addMessage("Failed to update room type status --" + err, "error"));
    }
}


function* updateRoomStatus(action) {
    let room = yield select((state) => {
        return state.room.rooms[action.roomId];
    });

    room = {...room, room_status_id: action.roomStatusId};

    try {
        let updated_room = yield makeRequest(Api.updateRoomStatus, [action.roomId, room]);
        yield put(updatedRoomStatus(action.roomId, action.roomStatusId));
    }
    catch(err) {
        yield put(addMessage("Failed to update room status -- " + err));
    }
}

export default [
    takeLatest('room/LIST', listRooms),
    takeLatest('room/ADD', addRoom),
    takeLatest('room/UPDATE', updateRoom),
    takeLatest('room-type/LIST', listRoomTypes),
    takeLatest('room-type/ADD', addRoomType),
    takeLatest('room-type/UPDATE', updateRoomType),
    takeLatest('room-type-status/LIST', listRoomTypeStatuses),
    takeLatest('room-type-status/ADD', addRoomTypeStatus),
    takeLatest('room-type-status/UPDATE', updateRoomTypeStatus),
    takeLatest('room/status/UPDATE', updateRoomStatus)
];