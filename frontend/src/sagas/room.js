import {all, call, put, select, takeLatest} from "redux-saga/effects"
import {makeRequest} from "./network"

import * as Api from "../api"
import {
    listedRooms, addedRoom, updatedRoom,
    listedRoomTypes, addedRoomType, updatedRoomType,
    listedRoomTypeStatuses, addedRoomTypeStatus, updatedRoomTypeStatus,
    updatedRoomStatus,

    networkStart, networkStop, addMessage
} from "../actions"

function* listRooms(action) {
    try {
        let rooms = yield makeRequest(Api.getRooms);
        yield put(listRoomsSuccess(rooms));
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
        let updatedRoom = yield makeRequest(Api.updateRoom, [action.room.id, action.room]);
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
        let updatedRoomType = yield makeRequest(Api.updateRoomType, [action.roomType.id, action.roomType]);
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

    yield put(networkStop());
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
        let updatedRoomTypeStatus = yield makeRequest(Api.updateRoomTypeStatus, [action.roomTypeStatus.id, action.roomTypeStatus]);
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

function* listRoomsHandler() {
    yield takeLatest('room/LIST', listRooms);
}
function* addRoomHandler() {
    yield takeLatest('room/ADD', addRoom);
}
function* updateRoomHandler() {
    yield takeLatest('room/UPDATE', updateRoom);
}

function* listRoomTypesHandler() {
    yield takeLatest('room-type/LIST', listRoomTypes);
}
function* addRoomTypeHandler() {
    yield takeLatest('room-type/ADD', addRoomType);
}
function* updateRoomTypeHandler() {
    yield takeLatest('room-type/UPDATE', updateRoomType)
}

function* listRoomTypeStatusesHandler() {
    yield takeLatest('room-type-status/LIST', listRoomTypeStatuses);
}
function* addRoomTypeStatusHandler() {
    yield takeLatest('room-type-status/ADD', addRoomTypeStatus);
}
function* updateRoomTypeStatusHandler() {
    yield takeLatest('room-type-status/UPDATE', updateRoomTypeStatus)
}

function* updateRoomStatusHandler() {
    yield takeLatest('room/status/UPDATE', updateRoomStatus);
}

function* roomHandler() {
    yield all([
        listRoomsHandler(), addRoomHandler(), updateRoomHandler(),
        listRoomTypesHandler(), addRoomTypeHandler(), updateRoomTypeHandler(),
        listRoomTypeStatusesHandler(),  addRoomTypeStatusHandler(), updateRoomTypeStatusHandler(),        
        updateRoomStatusHandler()
    ]);
}

export default roomHandler;