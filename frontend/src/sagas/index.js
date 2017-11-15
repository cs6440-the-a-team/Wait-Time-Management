import {all} from "redux-saga/effects"

import loginSagas from "./login"
import patientSagas from "./patient"
import roomSagas from "./room"
import procedureSagas from "./procedure"

function* rootSaga() {
    yield all([
        ...loginSagas,
        ...roomSagas,
        ...procedureSagas,
        ...patientSagas
    ])
}

export default rootSaga;