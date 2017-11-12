import {all} from "redux-saga/effects"

import loginHandler from "./login"
import roomHandler from "./room"
import procedureHandler from "./procedure"
import patientHandler from "./patient"

function* rootSaga() {
    yield all([
        loginHandler(),
        roomHandler(),
        procedureHandler(),
        patientHandler()
    ])
}

export default rootSaga;