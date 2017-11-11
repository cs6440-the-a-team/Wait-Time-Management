import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {addPatientStatus, updatePatientStatus} from "../../actions"

import ProcedureSelect from "./procedure-select"

class PatientStatusWidget extends Component {
    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        procedure_id: PropTypes.any,
        order: PropTypes.any,
        expectedDuration: PropTypes.string,
        avgDuration: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            order: props.order,
            procedure_id: props.procedureId,
            expected_duration: props.expectedDuration,
            avg_duration: props.avgDuration
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = {...this.state};
        if (this.state.id !== nextProps.id) {
            newState.id = nextProps.id;
        }
        if (this.state.name !== nextProps.name) {
            newState.name = nextProps.name;
        }
        if (this.state.order !== nextProps.order) {
            newState.order = nextProps.order;
        }
        if (this.state.procedure_id !== nextProps.procedureId) {
            newState.procedure_id = nextProps.procedureId;
        }
        if (this.state.expected_duration !== nextProps.expectedDuration) {
            newState.expected_duration = nextProps.expectedDuration;
        }
        if (this.state.avg_duration !== nextProps.avgDuration) {
            newState.avg_duration = nextProps.avgDuration;
        }

        this.setState(newState);
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleKeyDown = (e) => {
        const keyName = e.key
        if (keyName === "Enter") {
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let patientStatus = {...this.state};

        this.props.onFormSubmit(patientStatus);
    }

    render() {
        return (
            <tr>
                <td>
                    <ProcedureSelect name="procedure_id" value={this.state.procedure_id} onChange={this.onInputChange} />
                </td>
                <td>
                    <input className="form-control" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
                </td>
                <td>
                    <input className="form-control" type="number" placeholder="Order" name="order" value={this.state.order} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
                </td>
                <td>
                    <input className="form-control" type="number" placeholder="Expected Duration" name="expected_duration" value={this.state.expected_duration} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
                </td>
                <td>
                    <input className="form-control" type="number" placeholder="Average Duration" name="avg_duration" value={this.state.avg_duration} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
                </td>
                <td>
                    <div className="btn-group">
                        {this.props.children}
                        <a href="#" role="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</a>
                    </div>
                </td>
            </tr>
        )
    }
}

class PatientStatusListItem extends Component {
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
    }

    handleUpdatePatientStatus = (patientStatus) => {
        this.props.onUpdatePatientStatus(patientStatus);
        this.setState({
            editing: false
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <PatientStatusWidget id={this.props.id} name={this.props.name} 
                                     procedureId={this.props.procedureId} procedureName={this.props.procedureName} 
                                     order={this.props.order} expectedDuration={this.props.expectedDuration} avgDuration={this.props.avgDuration} 
                                     onFormSubmit={this.handleUpdatePatientStatus}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </PatientStatusWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.procedureName}</td>
                <td>{this.props.name}</td>
                <td>{this.props.order}</td>
                <td>{this.props.expectedDuration} minutes</td>
                <td>{this.props.avgDuration} minutes</td>
                <td>
                    <a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a>
                </td>
            </tr>
        )
    }
}

class PatientStatusList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false
        };
    }

    toggleAdd = (e) => {
        e.preventDefault();
        this.setState({
            adding: !this.state.adding
        });
    }

    handleAddPatientStatus = (patientStatus) => {
        this.props.onAddPatientStatus(patientStatus);
        this.setState({
            adding: false
        });
    }

    renderAdd() {
        if (this.state.adding) {
            return (
                <PatientStatusWidget id={null} name="" procedureId="" procedureName="" 
                                     order="" expectedDuration="" avgDuration="" 
                                     onFormSubmit={this.handleAddPatientStatus}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </PatientStatusWidget>
            );
        }
        return null;
    }

    render() {
        let patientStatusItems = this.props.patientStatuses.map((patientStatus) => {
            return (
                <PatientStatusListItem key={patientStatus.id} id={patientStatus.id} name={patientStatus.name} 
                                       procedureId={patientStatus.procedure_id} procedureName={patientStatus.procedure_name} 
                                       order={patientStatus.order} expectedDuration={patientStatus.expected_duration} avgDuration={patientStatus.avg_duration}
                                       onUpdatePatientStatus={this.props.onUpdatePatientStatus} />
            )
        });

        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Procedure</th>
                        <th>Status</th>
                        <th>Order</th>
                        <th>Expected duration</th>
                        <th>Avg. duration</th>
                        <th>
                            <a role="button" href="#" className="btn btn-outline-secondary" disabled={!this.state.adding} onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAdd()}
                    {patientStatusItems}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = function(state, ownProps) {
    let patientStatuses = Object.keys(state.procedure.statuses).map(function(patientStatusId) {
        let patientStatus = {...state.procedure.statuses[patientStatusId]};
        if (patientStatus.procedure_id && state.procedure.procedures[patientStatus.procedure_id] !== undefined) {
            patientStatus.procedure_name = state.procedure.procedures[patientStatus.procedure_id].name;
        }

        return patientStatus;
    }).sort(function(a, b) {
        return a.order - b.order;
    });

    return {
        patientStatuses
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onAddPatientStatus: (patientStatus) => {
            dispatch(addPatientStatus(patientStatus));
        },
        onUpdatePatientStatus: (patientStatus) => {
            dispatch(updatePatientStatus(patientStatus));
        }
    }
}

const PatientStatusListContainer = connect(mapStateToProps, mapDispatchToProps)(PatientStatusList);

export default PatientStatusListContainer;