
const initialState = {
    procedures: {
        1: {
            id: 1,
            name: "Operation X-RAY",
            expected_duration: "",
            avg_duration: ""
        },
        2: {
            id: 2,
            name: "Operation Y",
            expected_duration: "",
            avg_duration: ""
        },
        3: {
            id: 3,
            name: "Operation Z",
            expected_duration: "",
            avg_duration: ""
        },
        4: {
            id: 4,
            name: "Test AB",
            expected_duration: "",
            avg_duration: ""
        }
    },
    patient_statuses: {
        1: {
            id: 1,
            procedure_id: 1,
            name: "",
            order: "",
            expected_duration: "",
            avg_duration: ""
        },
        2: {
            id: 2,
            procedure_id: 2,
            name: "",
            order: "",
            expected_duration: "",
            avg_duration: ""
        },
        3: {
            id: 3,
            procedure_id: 1,
            name: "",
            order: "",
            expected_duration: "",
            avg_duration: ""
        }
    }
};

function procedure(state=initialState, action) {
    let newState = null;
    switch(action.type) {
        case 'procedure/ADD':
            let procedureId = Object.keys(state.procedures).length + 1;
            action.procedure.id = procedureId;

            let newProcedures = {...state.procedures, [procedureId]: action.procedure};
            newState = {...state, procedures: newProcedures};
            break;
        case 'procedure/UPDATE':
            let updatedProcedures = {...state.procedures, [action.procedure.id]: action.procedure};
            newState = {...state, procedures: updatedProcedures};
            break;
        case 'patient-status/ADD':
            let patientStatusId = Object.keys(state.patient_statuses).length + 1;
            action.patientStatus.id = patientStatusId;
            
            let newPatientStatuses = {...state.patient_statuses, [patientStatusId]: action.patientStatus};
            newState = {...state, patient_statuses: newPatientStatuses};
            break;
        case 'patient-status/UPDATE':
            let updatedPatientStatuses = {...state.patient_statuses, [action.patientStatus.id]: action.patientStatus};
            newState = {...state, patient_statuses: updatedPatientStatuses};
            break;
    }

    return newState || state;
}

export default procedure;