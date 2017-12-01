import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { makeRequest } from "./network"

import * as Api from "../api"
import {
    listedRooms, addedRoom, updatedRoom, deletedRoom,
    listedRoomTypes, addedRoomType, updatedRoomType, deletedRoomType,
    listedRoomTypeStatuses, addedRoomTypeStatus, updatedRoomTypeStatus, deletedRoomTypeStatus,
    updatedRoomStatus, addMessage, addErrorMessage
} from "../actions"

import deNormalizeObject from "../utils/de-normalize-object"

function* listRooms(action) {
    try {
        let rooms = yield makeRequest(Api.getRooms);
        yield put(listedRooms(rooms));
    }
    catch (err) {
        yield put(addMessage("Failed to list rooms -- " + err, "error"));
    }
}
function* addRoom(action) {
    try {
        let room = yield makeRequest(Api.addRoom, [action.room]);
        yield put(addedRoom(room));
    }
    catch (err) {
        yield put(addMessage("Failed to add room -- " + err + "." , "error"));
    }
}
function* updateRoom(action) {
    try {
        //console.log("Sending update room request: ", action);
        let room = yield makeRequest(Api.updateRoom, [action.room]);
        yield put(updatedRoom(room));
    }
    catch (err) {
        yield put(addMessage("Failed to update room --" + err, "error"));
    }
}
function* deleteRoom(action) {
    try {
        let deleteResponse = yield makeRequest(Api.deleteRoom, [action.roomId]);
        yield put(deletedRoom(action.roomId));
    }
    catch (err) {
        yield put(addMessage("Failed to remove room -- " + err, "error"));
    }
}

function* listRoomTypes(action) {
    try {
        let roomTypes = yield makeRequest(Api.getRoomTypes);
        yield put(listedRoomTypes(roomTypes));
    }
    catch (err) {
        yield put(addMessage("Failed to list room types -- " + err, "error"));
    }
}
function* addRoomType(action) {
    try {
        let roomType = yield makeRequest(Api.addRoomType, [action.roomType]);
        yield put(addedRoomType(roomType));
    }
    catch (err) {
        yield put(addMessage("Failed to add room type -- " + err, "error"));
    }
}
function* updateRoomType(action) {
    try {
        let roomType = yield makeRequest(Api.updateRoomType, [action.roomType]);
        yield put(updatedRoomType(roomType));
    }
    catch (err) {
        yield put(addMessage("Failed to update room type --" + err, "error"));
    }
}
function* deleteRoomType(action) {
    try {
        let deleteResponse = yield makeRequest(Api.deleteRoomType, [action.roomTypeId]);
        yield put(deletedRoomType(action.roomTypeId));
    }
    catch (err) {
        yield put(addMessage("Failed to remove room type -- " + err, "error"));
    }
}

function* listRoomTypeStatuses(action) {
    try {
        let room_type_statuses = yield makeRequest(Api.getRoomTypeStatuses);
        yield put(listedRoomTypeStatuses(room_type_statuses));
    }
    catch (err) {
        yield put(addMessage("Failed to list room type statuses -- " + err, "error"));
    }
}
function* addRoomTypeStatus(action) {
    try {
        let roomTypeStatus = yield makeRequest(Api.addRoomTypeStatus, [action.roomTypeStatus]);
        yield put(addedRoomTypeStatus(roomTypeStatus));
    }
    catch (err) {
        yield put(addMessage("Failed to add room type status -- " + err, "error"));
    }
}
function* updateRoomTypeStatus(action) {
    try {
        let roomTypeStatus = yield makeRequest(Api.updateRoomTypeStatus, [action.roomTypeStatus]);
        yield put(updatedRoomTypeStatus(roomTypeStatus));
    }
    catch (err) {
        yield put(addMessage("Failed to update room type status --" + err, "error"));
    }
}
function* deleteRoomTypeStatus(action) {
    try {
        let deleteResponse = yield makeRequest(Api.deleteRoomTypeStatus, [action.roomTypeStatusId]);
        yield put(deletedRoomTypeStatus(action.roomTypeStatusId));
    }
    catch (err) {
        yield put(addMessage("Failed to remove room type status -- " + err, "error"));
    }
}


function* updateRoomStatus(action) {
    let room = yield select((state) => {
        return state.room.rooms[action.roomId];
    });

    room = { ...room, room_status_id: action.roomStatusId };
    delete room.expected_duration;
    delete room.status;
    delete room.start_time;

    try {
        let updated_room = yield makeRequest(Api.updateRoomStatus, [action.roomId, room]);
        yield put(updatedRoomStatus(action.roomId, action.roomStatusId, updated_room.start_time));
    }
    catch (err) {
        yield put(addErrorMessage("Failed to update room status -- " + err));
    }
}

export default [
    takeLatest('room/LIST', listRooms),
    takeLatest('room/ADD', addRoom),
    takeLatest('room/UPDATE', updateRoom),
    takeLatest('room/DELETE', deleteRoom),
    takeLatest('room-type/LIST', listRoomTypes),
    takeLatest('room-type/ADD', addRoomType),
    takeLatest('room-type/UPDATE', updateRoomType),
    takeLatest('room-type/DELETE', deleteRoomType),
    takeLatest('room-type-status/LIST', listRoomTypeStatuses),
    takeLatest('room-type-status/ADD', addRoomTypeStatus),
    takeLatest('room-type-status/UPDATE', updateRoomTypeStatus),
    takeLatest('room-type-status/DELETE', deleteRoomTypeStatus),
    takeLatest('room/status/UPDATE', updateRoomStatus)
];