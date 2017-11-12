import {all, call, put, select, takeLatest} from "redux-saga/effects"
import {makeRequest} from "./network"
import * as Api from "../api"
import {
    listedPatients, addedPatient, updatedPatient, updatedPatientStatus, addErrorMessage
} from "../actions"

function* listPatients(action) {
    try {
        let patients = makeRequest(Api.listPatients);
        put(listedPatients(patients));
    }
    catch(err) {
        put(addErrorMessage("Failed to list patients -- " + err));
    }
}

function* addPatient(action) {
    try {
        let patient = makeRequest(Api.addPatient, [action.patient]);
        put(addedPatient(patient));
    }
    catch(err) {
        put(addErrorMessage("Failed to add patient -- " + err));
    }
}

function* updatePatient(action) {
    try {
        let patient = makeRequest(Api.updatePatient, [action.patient]);
        put(updatedPatient(patient));
    }
    catch(err) {
        put(addErrorMessage("Failed to update patient -- " + err));
    }
}

function* updatePatientStatus(action) {
    
    let patient = select((state) => {
        return {...state.patient.patients[action.patientId]};
    });

    patient.procedure_status_id = action.procedureStatusId;

    try {
        let updatedPatient = makeRequest(Api.updatePatientStatus, [action.patientId, patient]);
        put(updatePatient(updatedPatient));
    }
    catch(err) {
        put(addErrorMessage("Failed to update patient status -- " + err));
    }
}

function* listPatientHandler() {
    takeLatest("patient/LIST", listPatients);
}
function* addPatientHandler() {
    takeLatest("patient/ADD", addPatient);
}
function* updatePatientHandler() {
    takeLatest("patient/UPDATE", updatePatient);
}
function* updatePatientStatusHandler() {
    takeLatest("patient/status/UPDATE", updatePatientStatus);
}

function* patientHandler() {
    yield all([
        listPatientHandler(),
        addPatientHandler(),
        updatePatientHandler(),
        updatePatientStatusHandler()
    ]);
}

export default patientHandler;