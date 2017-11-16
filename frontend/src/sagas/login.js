import {call, put, select, takeLatest} from "redux-saga/effects"
import {delay} from "redux-saga"

import * as Api from "../api"
import base64 from "base-64"
import { networkStart, networkStop, loginSuccess } from "../actions";

function* login(action) {
    // Fake it for now
    let token = base64.encode(action.username + ":" + action.password),
        role = ["admin", "staffplus"].indexOf(action.username) >= 0 ? "staffplus" : "staff",
        expires = Date.now() + (1000 * 60 * 60 * 1); // Expires in 1 hour

    yield put(networkStart());
    yield delay(1500);
    yield put(networkStop());

    yield put(loginSuccess(token, role, expires));
}

export default [takeLatest("session/LOGIN/attempt", login)];