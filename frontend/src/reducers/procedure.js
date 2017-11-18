import normalizeArray from "../utils/normalize-array"

const initialState = {
    procedures: {},
    statuses: {}
};

function procedure(state=initialState, action) {
    let newState = null;
    switch(action.type) {
        case 'procedure/LISTED':
            newState = {...state, procedures: normalizeArray(action.procedures, "procedure_id")};
        break;
        case 'procedure-status/LISTED':
            newState = {...state, statuses: normalizeArray(action.procedureStatuses, "procedure_status_id")};
        break;
        case 'procedure/ADDED':
        case 'procedure/UPDATED':
            let updatedProcedures = {...state.procedures, [action.procedure.procedure_id]: action.procedure};
            newState = {...state, procedures: updatedProcedures};
            break;
        case 'procedure-status/ADDED':
        case 'procedure-status/UPDATED':
            let updatedStatuses = {...state.statuses, [action.procedureStatus.procedure_status_id]: action.procedureStatus};
            newState = {...state, statuses: updatedStatuses};
            break;
        case 'procedure/DELETED':
            let remainingProcedures = Object.assign({}, state.procedures);
            delete remainingProcedures[action.procedureId];
            newState = {...state, procedures: remainingProcedures};
            break;
        case 'procedure-status/DELETED':
            let remainingProcedureStatuses = Object.assign({}, state.statuses);
            delete remainingProcedureStatuses[action.procedureStatusId];
            newState = {...state, statuses: remainingProcedureStatuses};
            break;
        case 'session/LOGOUT':
            newState = initialState;
            break;
    }

    return newState || state;
}

export default procedure;