import { combineReducers, createStore } from "redux"
import room from "./room"
import procedure from "./procedure"

let store = createStore(combineReducers({
    room,
    procedure
}));

export default store;