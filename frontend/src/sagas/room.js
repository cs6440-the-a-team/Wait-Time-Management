import {call, put, select, takeLatest} from "redux-saga/effects"
import * as Api from "../api"
import {
    listRoomsStart, listRoomsFailure, listRoomsSuccess,
    listRoomTypesStart, listRoomTypesFailure, listRoomTypesSuccess,
    listedRoomTypeStatuses,
    updateRoomStatusStart, updateRoomStatusFailure, updateRoomStatusSuccess,
    networkStart, networkStop, addMessage
} from "../actions"

function* listRooms(action) {
    try {
        console.log('Requesting rooms...');
        yield put(listRoomsStart());
        let response = yield call(Api.getRooms);
        console.log("Response: ", response);
        let rooms = yield response.json();
        yield put(listRoomsSuccess(rooms));
    }
    catch(err) {
        console.log("Failed to get rooms: ", err);
        yield put(listRoomsFailure("Failed to list rooms -- " + err));
    }
}

function* listRoomTypes(action) {
    try {
        console.log('Requesting room types...');
        yield put(listRoomTypesStart());
        let response = yield call(Api.getRoomTypes);
        console.log("Response: ", response);
        let room_types = yield response.json();
        yield put(listRoomTypesSuccess(room_types));
    }
    catch(err) {
        console.log("Failed to get room types: ", err);
        yield put(listRoomTypesFailure("Failed to list room types -- " + err));
    }
}

function* listRoomTypeStatuses(action) {
    try {
        yield put(networkStart());
        let response = yield call(Api.getRoomTypeStatuses);
        console.log("Response: ", response);
        let room_type_statuses = yield response.json();
        yield put(listedRoomTypeStatuses(room_type_statuses));
    }
    catch(err) {
        console.log("Failed to get room type statuses: ", err);
        yield put(addMessage("Failed to list room type statuses -- " + err, "error"));
    }

    yield put(networkStop());
}

function* updateRoomStatus(action) {
    let room = yield select((state) => {
        console.log("Selecting room from state: ",  action.roomId, state.room.rooms);
        return state.room.rooms[action.roomId];
    });

    console.log("Selected room: ", room);

    room = {...room, status: action.status};

    console.log("Updated room: ", room);

    try {
        console.log('Requesting update room status...');
        yield put(updateRoomStatusStart());
        let response = yield call(Api.updateRoomStatus, action.roomId, room);
        console.log("Response: ", response);
        let room_types = yield response.json();
        yield put(updateRoomStatusSuccess(action.roomId, action.status));
    }
    catch(err) {
        console.log("Failed to update room status: ", err);
        yield put(updateRoomStatusFailure("Failed to update room status -- " + err));
    }
}

function* listRoomsHandler() {
    yield takeLatest('room/LIST', listRooms);
}

function* listRoomTypesHandler() {
    yield takeLatest('room-type/LIST', listRoomTypes);
}

function* listRoomTypeStatusesHandler() {
    yield takeLatest('room-type-status/LIST', listRoomTypeStatuses);
}

function* updateRoomStatusHandler() {
    yield takeLatest('room/status/UPDATE', updateRoomStatus);
}

export {listRoomsHandler, listRoomTypesHandler, listRoomTypeStatusesHandler, updateRoomStatusHandler}