import { combineReducers, createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas"
import room from "./room"
import procedure from "./procedure"
import patient from "./patient"
import session from "./session"

const sagaMiddleware = createSagaMiddleware();

let store = createStore(combineReducers({
    session,
    room,
    procedure,
    patient
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;