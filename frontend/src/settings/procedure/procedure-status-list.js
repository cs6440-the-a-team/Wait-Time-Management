import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { addProcedureStatus, updateProcedureStatus, deleteProcedureStatus } from "../../actions"
import { formatTime } from "../../utils/time-helper"
import deNormalizeObject from "../../utils/de-normalize-object"

import ProcedureSelect from "./procedure-select"

class ProcedureStatusWidget extends Component {
    static propTypes = {
        procedureStatusId: PropTypes.any,
        status: PropTypes.string,
        procedureId: PropTypes.any,
        order: PropTypes.any,
        expectedDuration: PropTypes.any,
        averageDuration: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            procedure_status_id: props.procedureStatusId,
            status: props.status,
            order: props.order,
            procedure_id: props.procedureId,
            expected_duration: props.expectedDuration,
            average_duration: props.averageDuration
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };

        if (this.state.procedure_status_id) {
            if (this.state.procedure_status_id !== nextProps.procedureStatusId) {
                newState.procedure_status_id = nextProps.procedureStatusId;
            }
            if (this.state.status !== nextProps.status) {
                newState.status = nextProps.status;
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
            if (this.state.average_duration !== nextProps.averageDuration) {
                newState.average_duration = nextProps.averageDuration;
            }
        }

        this.setState(newState);
    }

    onInputChange = (e) => {

        let value = e.target.value;
        switch (e.target.name) {
            case 'average_duration':
            case 'expected_duration':
            case 'order':
                value = value.replace(/\D/g, "").trim().substring(0, 4);
                value = parseInt(value || 0);
                break;
        }
        this.setState({
            [e.target.name]: value
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

        let procedureStatus = { ...this.state };

        this.props.onFormSubmit(procedureStatus);
    }

    handleDoneClicked = (e) => {
        e.preventDefault();

        let confirmed = confirm("Are you sure you want to remove this procedure status from the active system? Historical data will not be removed.");

        if (confirmed) {
            this.props.onRemoveProcedureStatus(this.props.procedureStatusId);
        }
    };

    renderDeleteButton() {
        if (this.props.procedureStatusId) {
            return (
                <a href="#" role="button" className="btn btn-outline-danger" onClick={this.handleDoneClicked} title="Remove"><i className="fa fa-close"/> Remove</a>
            );
        }

        return null;
    }

    render() {
        return (
            <tr>
                <td>
                    <ProcedureSelect name="procedure_id" value={this.state.procedure_id} onChange={this.onInputChange} />
                </td>
                <td>
                    <input className="form-control" type="text" placeholder="Name" name="status" value={this.state.status} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <input className="form-control" type="number" placeholder="Order" name="order" value={this.state.order} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <div className="input-group">
                        <input className="form-control" type="number" maxLength={4} placeholder="Expected Duration" name="expected_duration" value={this.state.expected_duration} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                        <span className="input-group-addon">minutes</span>
                    </div>
                </td>
                <td>
                    {this.state.average_duration && `${this.state.average_duration} minutes`}
                </td>
                <td>
                    <div className="btn-group">
                        {this.props.children}
                        <a href="#" role="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</a>
                        {this.renderDeleteButton()}
                    </div>
                </td>
            </tr>
        )
    }
}

class ProcedureStatusListItem extends Component {
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

    handleUpdateProcedureStatus = (procedureStatus) => {
        this.props.onUpdateProcedureStatus(procedureStatus);
        this.setState({
            editing: false
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <ProcedureStatusWidget {...this.props}
                    onFormSubmit={this.handleUpdateProcedureStatus}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </ProcedureStatusWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.procedureName}</td>
                <td>{this.props.status}</td>
                <td>{this.props.order}</td>
                <td>{formatTime({ minutes: this.props.expectedDuration })}</td>
                <td>{formatTime({ minutes: this.props.averageDuration })}</td>
                <td>
                    <a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a>
                </td>
            </tr>
        )
    }
}

class ProcedureStatusList extends Component {

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

    handleAddProcedureStatus = (procedureStatus) => {
        this.props.onAddProcedureStatus(procedureStatus);
        this.setState({
            adding: false
        });
    }

    renderAdd() {
        if (this.state.adding) {
            return (
                <ProcedureStatusWidget procedureStatusId={null} status="" procedureId="" procedureName=""
                    order="" expectedDuration="" averageDuration=""
                    onFormSubmit={this.handleAddProcedureStatus}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </ProcedureStatusWidget>
            );
        }
        return null;
    }

    render() {
        let procedureStatusItems = this.props.procedureStatuses.map((procedureStatus) => {
            return (
                <ProcedureStatusListItem key={procedureStatus.procedure_status_id} 
                    procedureStatusId={procedureStatus.procedure_status_id} 
                    status={procedureStatus.status}
                    procedureId={procedureStatus.procedure_id} 
                    procedureName={procedureStatus.procedure_name}
                    order={procedureStatus.order} 
                    expectedDuration={procedureStatus.expected_duration} 
                    averageDuration={procedureStatus.average_duration}
                    onRemoveProcedureStatus={this.props.onRemoveProcedureStatus}
                    onUpdateProcedureStatus={this.props.onUpdateProcedureStatus} />
            )
        });

        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Procedure</th>
                        <th>Status</th>
                        <th>Order</th>
                        <th>Expected Duration</th>
                        <th>Average Duration</th>
                        <th>
                            <a role="button" href="#" className="btn btn-outline-secondary" disabled={!this.state.adding} onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAdd()}
                    {procedureStatusItems}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    let procedureStatuses = deNormalizeObject(state.procedure.statuses).map(function (procedureStatus) {
        
        if (procedureStatus.procedure_id && state.procedure.procedures[procedureStatus.procedure_id] !== undefined) {
            procedureStatus = {...procedureStatus, procedure_name: state.procedure.procedures[procedureStatus.procedure_id].procedure_name};
        }

        return procedureStatus;
    }).sort(function (a, b) {
        return a.order - b.order;
    });

    return {
        procedureStatuses
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onAddProcedureStatus: (procedureStatus) => {
            dispatch(addProcedureStatus(procedureStatus));
        },
        onUpdateProcedureStatus: (procedureStatus) => {
            dispatch(updateProcedureStatus(procedureStatus));
        },
        onRemoveProcedureStatus: (procedureStatusId) => {
            dispatch(deleteProcedureStatus(procedureStatusId));
        }
    }
}

const ProcedureStatusListContainer = connect(mapStateToProps, mapDispatchToProps)(ProcedureStatusList);

export default ProcedureStatusListContainer;