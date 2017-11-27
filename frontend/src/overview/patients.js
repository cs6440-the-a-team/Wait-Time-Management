import React from "react"
import { connect } from "react-redux"
import deNormalizeObject from "../utils/de-normalize-object"
import { formatTime, minutesSince } from "../utils/time-helper"
import { addPatient, updatePatient, showPatientCard, deletePatient } from "../actions"

import PersonalCardContainer from "../containers/personal-card-container"
import ProcedureSelect from "../settings/procedure/procedure-select"
import ProcedureStatusSelectContainer from "./procedure-status-select"
import RoomSelectContainer from "../containers/room-select-container"
import AuthorizedComponentContainer from "../containers/authorized-component-container"


const EDIT_ROLES = ['admin', 'staffplus'];

class PatientWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            patient_id: props.patientId,
            patient_name: props.patientName,
            procedure_id: props.procedureId,
            procedure_status_id: props.procedureStatusId,
            room_id: props.roomId
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.patient_id) {
            let newState = {};
            if (this.state.patient_id !== nextProps.patientId) {
                newState.patient_id = nextProps.patientId;
            }
            if (this.state.patient_name !== nextProps.patientName) {
                newState.patient_name = nextProps.patientName;
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

    handleDoneClicked = (e) => {
        e.preventDefault();

        let confirmed = confirm("Are you sure this patient is done? Continuing will remove this patient from the active list.");

        if (confirmed) {
            this.props.onRemovePatient(this.props.patientId);
        }
    }

    renderDeleteButton() {
        if (this.props.patientId) {
            return (
                <a href="#" role="button" className="btn btn-sm btn-outline-success" onClick={this.handleDoneClicked} title="Done"><i className="fa fa-check"/> Done</a>
            );
        }

        return null;
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.patientAlias}
                </td>
                <td>
                    <input type="text" name="patient_name" value={this.state.patient_name} onChange={this.handleInputChange} className="form-control" />
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
                            <a href="#" role="button" className="btn btn-sm btn-outline-secondary" onClick={this.props.onCancel}>Cancel</a>
                            <a href="#" role="button" className="btn btn-sm btn-primary" onClick={this.handleSubmit}>Save</a>
                            {this.renderDeleteButton()}
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

    handleRemovePatient = (patient) => {
        this.props.onRemovePatient(patient);
        this.setState({
            editing: false
        });
    };

    handlePatientSelect = (e) => {
        e.preventDefault();
        this.props.onPatientSelect(this.props.patientId);
    };

    render() {
        if (this.state.editing) {
            return (
                <PatientWidget {...this.props} onRemovePatient={this.handleRemovePatient} onFormSubmit={this.handleFormSubmit} onCancel={this.toggleEdit} />
            )
        }

        let trClasses = [];

        let elapsed_time = null;
        if (this.props.startTime) {
            elapsed_time = minutesSince(this.props.startTime);

            //console.log("Elapsed time: ", elapsed_time);

            if (elapsed_time > parseInt(this.props.expectedDuration)) {
                trClasses.push("table-danger");
            }
        }

        return (
            <tr className={trClasses.join(" ")}>
                <td>
                    <a href="#" role="button" onClick={this.handlePatientSelect} title="Show personal card">{this.props.patientAlias}</a>
                </td>
                <td>{this.props.patientName}</td>
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

        this.setState({
            adding: false
        });
    };

    handleUpdatePatient = (patient) => {
        this.props.updatePatient(patient);
    }

    renderAdd() {
        if (this.state.adding) {
            return <PatientWidget patientAlias="" patientName="" procedureId="" procedureStatusId="" roomId="" onFormSubmit={this.handleAddPatient} onCancel={this.toggleAdding} />;
        }
        return null;
    }

    renderRows() {
        return this.props.patients.map((patient) => {
            return (
                <PatientRowItem key={patient.patient_id}
                    patientId={patient.patient_id}
                    patientAlias={patient.alias}
                    patientName={patient.patient_name}
                    procedureId={patient.procedure_id}
                    procedureName={patient.procedure_name}
                    procedureStatusId={patient.procedure_status_id}
                    procedureStatusName={patient.procedure_status_name}
                    startTime={patient.start_time}
                    expectedDuration={patient.expected_duration}
                    roomId={patient.room_id}
                    roomName={patient.room_name}
                    onPatientSelect={this.props.showPatientCard}
                    onRemovePatient={this.props.removePatient}
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
                updated_patient.procedure_name = procedure.procedure_name;
            }
        }

        // Status name
        if (state.procedure.statuses) {
            let procedure_status = state.procedure.statuses[patient.procedure_status_id];
            if (procedure_status) {
                updated_patient.procedure_status_name = procedure_status.procedure_status;
            }
        }

        // Room name
        if (state.room.rooms) {
            let room = state.room.rooms[patient.room_id];
            if (room) {
                updated_patient.room_name = room.room_name;
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
        },
        removePatient: (patient_id) => {
            dispatch(deletePatient(patient_id));
        }
    }
};

const PatientsContainer = connect(mapStateToProps, mapDispatchToProps)(Patients);

export default PatientsContainer;