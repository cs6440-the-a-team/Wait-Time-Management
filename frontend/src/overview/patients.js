import React from "react"
import {connect} from "react-redux"

const Patients = (props) => {
    return (
        <h5>Patients go here. One more time!</h5>
    )
};

const mapStateToProps = function(state, ownProps) {
    return {
        patients: []
    }
}

const PatientsContainer = connect(mapStateToProps)(Patients);

export default PatientsContainer;