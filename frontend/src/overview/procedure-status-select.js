import React from "react"
import {connect} from "react-redux"

const ProcedureStatusSelect = ({name, value, onChange, procedureStatuses}) => {
    return (
        <select name={name} value={value} onChange={onChange}>
            <option value=""> -- Select Procedure Status -- </option>
            {procedureStatuses.map(function(procedureStatus) {
                return <option key={procedureStatus.id} value={procedureStatus.id}>{procedureStatus.name}</option>
            })}
        </select>
    )
}

const mapStateToProps = (state, ownProps) => {
    let status_ids = state.procedure.procedures[ownProps.procedure].procedure_statuses,
        statuses = status_ids.map(function(status_id) {
            return state.procedure.statuses[status_id];
        }).sort(function(a, b) {
            let order_a = parseInt(a.order || 0),
                order_b = parseInt(b.order || 0);

            return order_a - b_order;
        });

    console.log("Procedure statuses found: ", statuses);

    return {
        procedureStatuses: statuses
    }
};

const ProcedureStatusSelectContainer = connect(mapStateToProps)(ProcedureStatusSelect);

export default ProcedureStatusSelectContainer;