import React from "react"
import { connect } from "react-redux"
import deNormalizeObject from "../utils/de-normalize-object"
import { formatTime, minutesSince } from "../utils/time-helper"
import { addPatient, updatePatient, showPatientCard } from "../actions"

import PersonalCardContainer from "../containers/personal-card-container"
import ProcedureSelect from "../settings/procedure/procedure-select"
import ProcedureStatusSelectContainer from "./procedure-status-select"
import RoomSelectContainer from "../containers/room-select-container"
import AuthorizedComponentContainer from "../containers/authorized-component-container"


const EDIT_ROLES = ['admin'];

class PatientWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.patientId,
            name: props.name,
            procedure_id: props.procedureId,
            procedure_status_id: props.procedureStatusId,
            room_id: props.roomId
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.id) {
            let newState = {};
            if (this.state.id !== nextProps.patientId) {
                newState.id = nextProps.patientId;
            }
            if (this.state.name !== nextProps.name) {
                newState.name = nextProps.name;
            }
            if (this.state.procedure_id !== nextProps.procedureId) {
                newState.procedure_id = nextProps.procedureId;
            }
            if (this.state.procedure_status_id !== nextProps.procedureStatusId) {
                newState.procedure_status_id = nextProps.procedureStatusId;
            }
            if (this.state.room_id !== nextProps.roomId) {
                newState.room_id = nextProps.roomId;
            }

            this.setState(newState);
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let patient = { ...this.state };

        this.props.onFormSubmit(patient);
    }

    render() {
        return (
            <tr>
                <td />
                <td>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" />
                </td>
                <td>
                    <ProcedureSelect name="procedure_id" value={this.state.procedure_id} onChange={this.handleInputChange} className="form-control" />
                </td>
                <td colSpan="2">
                    <ProcedureStatusSelectContainer name="procedure_status_id" procedureId={this.state.procedure_id} value={this.state.procedure_status_id} onChange={this.handleInputChange} className="form-control" />
                </td>
                <td colSpan="2">
                    <RoomSelectContainer name="room_id" value={this.state.room_id} onChange={this.handleInputChange} className="form-control" />
                </td>
                <AuthorizedComponentContainer authorizedRoles={EDIT_ROLES}>
                    <td>
                        <div className="btn-group">
                            <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.props.onCancel}>Cancel</a>
                            <a href="#" role="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</a>
                        </div>
                    </td>
                </AuthorizedComponentContainer>
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

    handlePatientSelect = (e) => {
        e.preventDefault();
        this.props.onPatientSelect(this.props.patientId);
    };

    render() {
        if (this.state.editing) {
            return (
                <PatientWidget {...this.props} onFormSubmit={this.handleFormSubmit} onCancel={this.toggleEdit} />
            )
        }
        return (
            <tr>
                <td>
                    <a href="#" role="button" onClick={this.handlePatientSelect} title="Show personal card">{this.props.patientId}</a>
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.procedureName}</td>
                <td>{this.props.procedureStatusName}</td>
                <td>{formatTime({ minutes: minutesSince(this.props.startTime) })}</td>
                <td>{formatTime({ minutes: this.props.expectedDuration })}</td>
                <td>{this.props.roomName}</td>
                <AuthorizedComponentContainer authorizedRoles={EDIT_ROLES}>
                    <td>
                        <a href="#" role="button" onClick={this.toggleEdit}>Edit</a>
                    </td>
                </AuthorizedComponentContainer>
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
            return <PatientWidget name="" procedureId="" procedureStatusId="" roomId="" onFormSubmit={this.handleAddPatient} onCancel={this.toggleAdding} />;
        }
        return null;
    }

    renderRows() {
        return this.props.patients.map((patient) => {
            return (
                <PatientRowItem key={patient.id}
                    patientId={patient.id}
                    name={patient.name}
                    procedureId={patient.procedure_id}
                    procedureName={patient.procedure_name}
                    procedureStatusId={patient.procedure_status_id}
                    procedureStatusName={patient.procedure_status_name}
                    startTime={patient.start_time}
                    expectedDuration={patient.expected_duration}
                    roomId={patient.room_id}
                    roomName={patient.room_name}
                    onPatientSelect={this.props.showPatientCard}
                    onUpdatePatient={this.handleUpdatePatient} />
            );
        });
    }

    render() {
        return (
            <div className="patient-overview-container">
                <PersonalCardContainer />
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
                            <AuthorizedComponentContainer authorizedRoles={EDIT_ROLES}>
                                <th>
                                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdding}>Add</a>
                                </th>
                            </AuthorizedComponentContainer>
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
        if (state.procedure.procedures) {
            let procedure = state.procedure.procedures[patient.procedure_id];
            if (procedure) {
                updated_patient.procedure_name = procedure.name;
            }
        }

        // Status name
        if (state.procedure.statuses) {
            let status = state.procedure.statuses[patient.procedure_status_id];
            if (status) {
                updated_patient.procedure_status_name = status.name;
            }
        }

        // Room name
        if (state.room.rooms) {
            let room = state.room.rooms[patient.room_id];
            if (room) {
                updated_patient.room_name = room.name;
            }
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
        },
        showPatientCard: (patient_id) => {
            dispatch(showPatientCard(patient_id));
        }
    }
};

const PatientsContainer = connect(mapStateToProps, mapDispatchToProps)(Patients);

export default PatientsContainer;