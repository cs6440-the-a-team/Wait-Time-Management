import {call, put, select, takeLatest} from "redux-saga/effects"
import * as Api from "../api"
import {
    networkStart, networkStop,
    listedProcedures,
    listedProcedureStatuses,
    addMessage
} from "../actions"

function* listProcedures(action) {
    try {
        yield put(networkStart());
        let response = yield call(Api.getProcedures);
        let procedures = yield response.json();
        yield put(listedProcedures(procedures));
    }
    catch(err) {
        yield put(addMessage("Error listing procedures -- " + err, "error"));
    }

    yield put(networkStop());
}

function* listProcedureStatuses(action) {
    try {
        yield put(networkStart());
        let response = yield call(Api.getProcedureStatuses);
        let procedure_statuses = yield response.json();
        yield put(listedProcedureStatuses(procedure_statuses));
    }
    catch(err) {
        yield put(addMessage("Error listing procedure statuses -- " + err, "error"));
    }

    yield put(networkStop());
}

function* listProceduresHandler() {
    takeLatest('procedure/LIST', listProcedures);
}

function* listProcedureStatusesHandler() {
    takeLatest('procedure-status/LIST', listProcedureStatuses);
}

export {listProceduresHandler, listProcedureStatusesHandler};