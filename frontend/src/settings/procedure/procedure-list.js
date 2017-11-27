import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { addProcedure, updateProcedure, deleteProcedure } from "../../actions"
import { formatTime } from "../../utils/time-helper"

class ProcedureWidget extends Component {
    static propTypes = {
        procedureId: PropTypes.any,
        procedureName: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            procedure_id: props.procedureId,
            procedure_name: props.procedureName
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };
        if (this.state.procedure_id) {
            if (this.state.procedure_id !== nextProps.procedureId) {
                newState.procedure_id = nextProps.procedureId;
            }
            if (this.state.procedure_name !== nextProps.procedureName) {
                newState.procedure_name = nextProps.procedureName;
            }
        }

        this.setState(newState);
    }

    onInputChange = (e) => {
        let value = e.target.value;
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

        let procedure = { ...this.state };

        this.props.onFormSubmit(procedure);
    }

    handleDoneClicked = (e) => {
        e.preventDefault();

        let confirmed = confirm("Are you sure you want to remove this procedure from the active system? Historical data will not be removed.");

        if (confirmed) {
            this.props.onRemoveProcedure(this.props.procedureId);
        }
    };

    renderDeleteButton() {
        if (this.props.procedureId) {
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
                    <input className="form-control" type="text" placeholder="Name" name="procedure_name" value={this.state.procedure_name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
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

class ProcedureListItem extends Component {

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

    handleUpdateProcedure = (procedure) => {
        this.props.onUpdateProcedure(procedure);
        this.setState({
            editing: false
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <ProcedureWidget {...this.props} onFormSubmit={this.handleUpdateProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </ProcedureWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.procedureName}</td>
                <td>
                    <a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a>
                </td>
            </tr>
        )
    }
}

class ProcedureList extends Component {

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

    handleAddProcedure = (procedure) => {
        this.props.onAddProcedure(procedure);
        this.setState({
            adding: false
        });
    }

    renderAdding() {
        if (this.state.adding) {
            return (
                <ProcedureWidget procedureId={null} procedureName="" expectedDuration="" averageDuration="" onFormSubmit={this.handleAddProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </ProcedureWidget>
            );
        }
        return null;
    }

    render() {
        let procedureItems = this.props.procedures.map((procedure) => {
            return (
                <ProcedureListItem key={procedure.procedure_id} 
                                   procedureId={procedure.procedure_id} 
                                   procedureName={procedure.procedure_name} 
                                   onRemoveProcedure={this.props.onRemoveProcedure}
                                   onUpdateProcedure={this.props.onUpdateProcedure} />
            )
        });
        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <a role="button" href="#" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAdding()}
                    {procedureItems}
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = function (state, ownProps) {
    let procedures = Object.keys(state.procedure.procedures).map(function (procedure_id) {
        return state.procedure.procedures[procedure_id];
    });

    return {
        procedures
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onAddProcedure: (procedure) => {
            dispatch(addProcedure(procedure));
        },
        onUpdateProcedure: (procedure) => {
            dispatch(updateProcedure(procedure));
        },
        onRemoveProcedure: (procedureId) => {
            dispatch(deleteProcedure(procedureId));
        }
    }
}

const ProcedureListContainer = connect(mapStateToProps, mapDispatchToProps)(ProcedureList);

export default ProcedureListContainer;