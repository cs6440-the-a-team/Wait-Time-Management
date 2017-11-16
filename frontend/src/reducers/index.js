import { combineReducers, createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas"
import room from "./room"
import procedure from "./procedure"
import patient from "./patient"
import session from "./session"

//import logger from "redux-logger"

import {listRooms, listRoomTypes, listProcedures, listProcedureStatuses, listRoomTypeStatuses, listPatients} from "../actions"

const sagaMiddleware = createSagaMiddleware();

let store = createStore(combineReducers({
    session,
    room,
    procedure,
    patient
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function updateInformation() {
    store.dispatch(listPatients());
    if (store.getState().session.get('role') === "admin") {
        store.dispatch(listProcedureStatuses());
        store.dispatch(listProcedures());
        store.dispatch(listRoomTypeStatuses());
        store.dispatch(listRoomTypes());
    }
    store.dispatch(listRooms());
}

export default store;

export {updateInformation};