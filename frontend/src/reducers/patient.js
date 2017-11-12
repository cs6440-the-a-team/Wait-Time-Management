const initialState = {
    patients: {}
}

function patient(state=initialState, action) {
    let newState = null;

    switch(action.type) {
        case 'patient/ADDED':
        case 'patient/UPDATED':
        case 'patient/status/UPDATED':
            let updatedPatients = {...state.patients, [action.patient.id]: action.patient};
            newState = {...state, patients: updatedPatients};
            break;
        case 'patient/LISTED':
            newState = {...state, patients: normalizeArray(action.patients)};
            break;
    }

    return newState || state;
}


export default patient;