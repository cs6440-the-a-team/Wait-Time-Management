import normalizeArray from "../utils/normalize-array"

const initialState = {
    procedures: {},
    statuses: {}
};

function procedure(state=initialState, action) {
    let newState = null;
    switch(action.type) {
        case 'procedure/ADDED':
        case 'procedure/UPDATED':
            let updatedProcedures = {...state.procedures, [action.procedure.id]: action.procedure};
            newState = {...state, procedures: updatedProcedures};
            break;
        case 'procedure/LISTED':
            newState = {...state, procedures: normalizeArray(action.procedures)};
            break;
        case 'procedure-status/ADDED':
        case 'procedure-status/UPDATED':
            let updatedStatuses = {...state.statuses, [action.status.id]: action.status};
            newState = {...state, statuses: updatedStatuses};
            break;
        case 'procedure-status/LISTED':
            newState = {...state, statuses: normalizeArray(action.statuses)};
            break;
        case 'session/LOGOUT':
            newState = initialState;
            break;
    }

    return newState || state;
}

export default procedure;