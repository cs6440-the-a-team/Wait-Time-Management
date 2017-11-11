import {all} from "redux-saga/effects"

import loginHandler from "./login"
import {listRoomsHandler, listRoomTypesHandler, updateRoomStatusHandler, listRoomTypeStatusesHandler} from "./room"
import {listProceduresHandler, listProcedureStatusesHandler} from "./procedure"

function* rootSaga() {
    yield all([
        loginHandler(),
        listRoomsHandler(),
        listRoomTypesHandler(),
        listRoomTypeStatusesHandler(),
        updateRoomStatusHandler(),
        listProceduresHandler(),
        listProcedureStatusesHandler()
    ])
}

export default rootSaga;