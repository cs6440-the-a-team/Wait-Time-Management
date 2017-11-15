import {all, call, put, select, takeLatest} from "redux-saga/effects"
import {makeRequest} from "./network"
import * as Api from "../api"
import {
    listedPatients, addedPatient, updatedPatient, updatedPatientStatus, addErrorMessage
} from "../actions"

function* listPatients(action) {
    try {
        let patients = yield makeRequest(Api.getPatients);
        yield put(listedPatients(patients));
    }
    catch(err) {
        yield put(addErrorMessage("Failed to list patients -- " + err));
    }
}

function* addPatient(action) {
    try {
        let patient = yield makeRequest(Api.addPatient, [action.patient]);
        yield put(addedPatient(patient));
    }
    catch(err) {
        yield put(addErrorMessage("Failed to add patient -- " + err));
    }
}

function* updatePatient(action) {
    try {
        let patient = yield makeRequest(Api.updatePatient, [action.patient]);
        yield put(updatedPatient(patient));
    }
    catch(err) {
        yield put(addErrorMessage("Failed to update patient -- " + err));
    }
}

function* updatePatientStatus(action) {
    
    let patient = yield select((state) => {
        return {...state.patient.patients[action.patientId]};
    });

    patient.procedure_status_id = action.procedureStatusId;

    try {
        let updatedPatient = yield makeRequest(Api.updatePatientStatus, [action.patientId, patient]);
        yield put(updatePatient(updatedPatient));
    }
    catch(err) {
        yield put(addErrorMessage("Failed to update patient status -- " + err));
    }
}

export default [
    takeLatest('patient/LIST', listPatients),
    takeLatest('patient/ADD', addPatient),
    takeLatest('patient/UPDATE', updatePatient),
    takeLatest('patient/status/UPDATE', updatePatientStatus)
];