import normalizeArray from "../utils/normalize-array"

const initialState = {
    patients: {},
    personal_card_to_show: null
}

function patient(state=initialState, action) {
    let newState = null;

    switch(action.type) {
        case 'patient/LISTED':
            newState = {...state, patients: normalizeArray(action.patients, "patient_id")};
        break;
        case 'patient/ADDED':
        case 'patient/UPDATED':
            let updates = {
                patients: {...state.patients, [action.patient.patient_id]: action.patient}
            };            
            if (action.type === "patient/ADDED") {
                // Mark patient for personal card display
                updates.personal_card_to_show = action.patient.patient_id;
            }
            newState = {...state, ...updates};
            break;
        case 'patient/DELETED':
            let remainingPatients = Object.assign({}, state.patients);
            delete remainingPatients[action.patientId];
            newState = {...state, patients: remainingPatients};
            break;
        case 'patient/status/UPDATED':
            let updatedPatient = {...state.patients[action.patientId], procedure_status_id: action.procedureStatusId};
            let updatedPatients = {...state.patients, [action.patientId]: updatedPatient};
            newState = {...state, patients: updatedPatients};
            break;
        case 'patient/show-card':
            newState = {...state, personal_card_to_show: action.patientId};
            break;
        case 'patient/dismiss-card':
            newState = {...state, personal_card_to_show: null};
            break;
        case 'session/LOGOUT':
            newState = initialState;
            break;
    }

    return newState || state;
}


export default patient;