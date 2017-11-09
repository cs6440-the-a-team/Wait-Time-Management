import { combineReducers, createStore } from "redux"
import room from "./room"
import procedure from "./procedure"
import patient from "./patient"

let store = createStore(combineReducers({
    room,
    procedure,
    patient
}));

export default store;