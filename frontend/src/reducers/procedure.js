import normalizeArray from "../utils/normalize-array"

const initialState = {
    procedures: {},
    statuses: {}
};

function procedure(state=initialState, action) {
    let newState = null;
    switch(action.type) {
        case 'procedure/ADDED':
            let procedureId = Object.keys(state.procedures).length + 1;
            action.procedure.id = procedureId;

            let newProcedures = {...state.procedures, [procedureId]: action.procedure};
            newState = {...state, procedures: newProcedures};
            break;
        case 'procedure/UPDATED':
            let updatedProcedures = {...state.procedures, [action.procedure.id]: action.procedure};
            newState = {...state, procedures: updatedProcedures};
            break;
        case 'procedure/LISTED':
            newState = {...state, procedures: normalizeArray(action.procedures)};
            break;
        case 'procedure-status/ADDED':
            let patientStatusId = Object.keys(state.patient_statuses).length + 1;
            action.patientStatus.id = patientStatusId;
            
            let newPatientStatuses = {...state.patient_statuses, [patientStatusId]: action.patientStatus};
            newState = {...state, patient_statuses: newPatientStatuses};
            break;
        case 'procedure-status/UPDATED':
            let updatedPatientStatuses = {...state.patient_statuses, [action.patientStatus.id]: action.patientStatus};
            newState = {...state, patient_statuses: updatedPatientStatuses};
            break;
        case 'procedure-status/LISTED':
            newState = {...state, statuses: normalizeArray(action.statuses)};
            break;
    }

    return newState || state;
}

export default procedure;