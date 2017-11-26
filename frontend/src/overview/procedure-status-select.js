import React from "react"
import {connect} from "react-redux"

const ProcedureStatusSelect = ({name, value, onChange, procedureStatuses}) => {

    let extra_props = {};

    if (procedureStatuses.length === 0) {
        extra_props.disabled=true;
    }

    return (
        <select name={name} value={value} onChange={onChange} className="form-control" {...extra_props}>
            <option value=""> -- Select Procedure Status -- </option>
            {procedureStatuses.map(function(procedureStatus) {
                return <option key={procedureStatus.procedure_status_id} value={procedureStatus.procedure_status_id}>{procedureStatus.procedure_status}</option>
            })}
        </select>
    )
}

const mapStateToProps = (state, ownProps) => {
    let statuses = [];
    if (ownProps.procedureId && state.procedure.procedures[ownProps.procedureId]) {
        if (state.procedure.statuses) {
            statuses = Object.keys(state.procedure.statuses).map(function(status_id) {
                return state.procedure.statuses[status_id];
            }).filter(function(status) {
                return status.procedure_id === ownProps.procedureId;
            }).sort(function(a, b) {
                let order_a = parseInt(a.procedure_status_order || 0),
                    order_b = parseInt(b.procedure_status_order || 0);

                return order_a - b_order;
            });
        }
    }
    //console.log("Procedure statuses found: ", statuses);

    return {
        procedureStatuses: statuses
    }
};

const ProcedureStatusSelectContainer = connect(mapStateToProps)(ProcedureStatusSelect);

export default ProcedureStatusSelectContainer;