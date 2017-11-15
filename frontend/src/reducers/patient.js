import normalizeArray from "../utils/normalize-array"

const initialState = {
    patients: {},
    personal_card_to_show: null
}

function patient(state=initialState, action) {
    let newState = null;

    switch(action.type) {
        case 'patient/ADDED':
        case 'patient/UPDATED':
        case 'patient/status/UPDATED':
            let updates = {
                updatedPatients: {...state.patients, [action.patient.id]: action.patient}
            };            
            if (action.type === "patient/ADDED") {
                // Mark patient for personal card display
                updates.personal_card_to_show = action.patient.id;
            }
            newState = {...state, patients: updatedPatients};
            break;
        case 'patient/show-card':
            newState = {...state, personal_card_to_show: action.patient_id};
            break;
        case 'patient/dismiss-card':
            newState = {...state, personal_card_to_show: null};
            break;
        case 'patient/LISTED':
            newState = {...state, patients: normalizeArray(action.patients)};
            break;
    }

    return newState || state;
}


export default patient;