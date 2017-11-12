import {all, call, put, select, takeLatest} from "redux-saga/effects"
import {makeRequest} from "./network"
import * as Api from "../api"
import {
    networkStart, networkStop,
    listedProcedures, addedProcedure, updatedProcedure,
    listedProcedureStatuses, addedProcedureStatus, updatedProcedureStatus,
    addMessage
} from "../actions"

function* listProcedures(action) {
    try {
        let procedures = yield makeRequest(Api.getProcedures);
        yield put(listedProcedures(procedures));
    }
    catch(err) {
        yield put(addMessage("Error listing procedures -- " + err, "error"));
    }
}
function* addProcedure(action) {
    try {
        let procedure = yield makeRequest(Api.addProcedure, [action.procedure]);
        yield put(addedProcedure(procedure));
    }
    catch(err) {
        yield put(addMessage("Error adding procedure -- " + err, "error"));
    }
}
function* updateProcedure(action) {
    try {
        let procedure = yield makeRequest(Api.updateProcedure, [action.procedure]);
        yield put(updatedProcedure(procedure));
    }
    catch(err) {
        yield put(addMessage("Error updating procedure -- " + err, "error"));
    }
}

function* listProcedureStatuses(action) {
    try {
        let procedure_statuses = yield makeRequest(Api.getProcedureStatuses);
        yield put(listedProcedureStatuses(procedure_statuses));
    }
    catch(err) {
        yield put(addMessage("Error listing procedure statuses -- " + err, "error"));
    }
}
function* addProcedureStatus(action) {
    try {
        let procedureStatus = yield makeRequest(Api.addProcedureStatus, [action.procedureStatus]);
        yield put(addedProcedureStatus(procedureStatus));
    }
    catch(err) {
        yield put(addMessage("Error adding procedure status -- " + err, "error"));
    }
}
function* updateProcedureStatus(action) {
    try {
        let procedureStatus = yield makeRequest(Api.updateProcedureStatus, [action.procedureStatus]);
        yield put(updatedProcedureStatus(procedureStatus));
    }
    catch(err) {
        yield put(addMessage("Error updating procedure status -- " + err, "error"));
    }
}

function* listProceduresHandler() {
    takeLatest('procedure/LIST', listProcedures);
}
function* addProcedureHandler() {
    takeLatest('procedure/ADD', addProcedure);
}
function* updateProcedureHandler() {
    takeLatest('procedure/UPDATE', updateProcedure);
}

function* listProcedureStatusesHandler() {
    takeLatest('procedure-status/LIST', listProcedureStatuses);
}
function* addProcedureStatusHandler() {
    takeLatest('procedure-status/ADD', addProcedureStatus);
}
function* updateProcedureStatusHandler() {
    takeLatest('procedure-status/UPDATE', updateProcedureStatus);
}

function* procedureHandler() {
    yield all([
        listProceduresHandler(), addProcedureHandler(), updateProcedureHandler(),
        listProcedureStatusesHandler(), addProcedureStatusHandler(), updateProcedureStatusHandler()
    ]);
}

export default procedureHandler;