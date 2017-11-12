import React from "react"
import { connect } from "react-redux"
import deNormalizeObject from "../utils/de-normalize-object"
import { formatTime, minutesSince } from "../utils/time-helper"

import { addPatient, updatePatient } from "../actions";

class PatientWidget extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="8">Widget goes here</td>
            </tr>
        );
    }
}

class PatientRowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    toggleEdit = (e) => {
        e.preventDefault();
        this.setState({
            editing: !this.state.editing
        });
    };

    handleFormSubmit = (patient) => {
        this.setState({
            editing: false
        });

        this.props.onUpdatePatient(patient);
    };

    render() {
        if (this.state.editing) {
            return (
                <PatientWidget {...this.props} onFormSubmit={this.handleFormSubmit} />
            )
        }
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.procedureName}</td>
                <td>{this.props.procedureStatusName}</td>
                <td>{formatTime({ minutes: minutesSince(this.props.startTime) })}</td>
                <td>{formatTime({ minutes: this.props.expectedDuration })}</td>
                <td>{this.props.roomName}</td>
                <td><a href="#" role="button" onClick={this.toggleEdit}>Edit</a></td>
            </tr>
        )
    }
}

class Patients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false
        };
    }

    toggleAdding = (e) => {
        e.preventDefault();
        this.setState({
            adding: !this.state.adding
        });
    }

    handleAddPatient = (patient) => {
        this.props.addPatient(patient);
    };

    handleUpdatePatient = (patient) => {
        this.props.updatePatient(patient);
    }

    renderAdd() {
        if (this.state.adding) {
            return <PatientWidget onSubmit={this.handleAddPatient} />;
        }
        return null;
    }

    renderRows() {
        return this.props.patients.map((patient) => {
            return (
                <PatientRowItem key={patient.id}
                    id={patient.id}
                    name={patient.name}
                    procedureId={patient.procedure_id}
                    procedureName={patient.procedure_name}
                    procedureStatusId={patient.procedure_status_id}
                    procedureStatusName={patient.procedure_status_name}
                    startTime={patient.start_time}
                    expectedDuration={patient.expected_duration}
                    roomId={patient.room_id}
                    roomName={patient.room_name}
                    onUpdatePatient={this.handleUpdatePatient} />
            );
        });
    }

    render() {
        return (
            <div className="patient-overview-container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Procedure</th>
                            <th>Status</th>
                            <th>Time Elapsed</th>
                            <th>Expected Duration</th>
                            <th>Location</th>
                            <th><a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdding}>Add</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAdd()}
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = function (state, ownProps) {
    let patients = deNormalizeObject(state.patient.patients).map(function (patient) {
        let updated_patient = { ...patient };

        // Procedure name
        let procedure = state.procedure.procedures[patient.procedure_id];
        if (procedure) {
            updated_patient.procedure_name = procedure.name;
        }

        // Status name
        let status = state.procedure.statuses[patient.procedure_status_id];
        if (status) {
            updated_patient.procedure_status_name = status.name;
        }

        // Room name
        let room = state.room.rooms[patient.room_id];
        if (room) {
            updated_patient.room_name = room.name;
        }

        return updated_patient;
    });
    return {
        patients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPatient: (patient) => {
            dispatch(addPatient(patient));
        },
        updatePatient: (patient) => {
            dispatch(updatePatient(patient));
        }
    }
};

const PatientsContainer = connect(mapStateToProps, mapDispatchToProps)(Patients);

export default PatientsContainer;