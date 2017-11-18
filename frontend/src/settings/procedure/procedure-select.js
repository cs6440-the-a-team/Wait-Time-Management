import React, {Component} from "react";
import {connect} from "react-redux";
import deNormalizeObject from "../../utils/de-normalize-object"

const ProcedureSelect = ({procedures, onChange, name, value}) => {
    return (
        <select className="form-control" name={name} value={value} onChange={onChange}>
            <option value=""> -- Select a Procedure -- </option>
            {procedures.map(function(procedure) {
                return (
                    <option value={procedure.procedure_id} key={procedure.procedure_id}>{procedure.procedure_name}</option>
                )
            })}
        </select>
    );
}

const mapStateToProps = function(state) {
    let procedures = deNormalizeObject(state.procedure.procedures);
    return {
        procedures
    }
};

const ProcedureSelectContainer = connect(mapStateToProps)(ProcedureSelect);

export default ProcedureSelectContainer;