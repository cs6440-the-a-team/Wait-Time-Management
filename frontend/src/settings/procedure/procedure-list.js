import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { addProcedure, updateProcedure } from "../../actions"
import { formatTime } from "../../utils/time-helper"

class ProcedureWidget extends Component {
    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        expectedDuration: PropTypes.any,
        averageDuration: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            expected_duration: props.expectedDuration,
            average_duration: props.averageDuration
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };
        if (this.state.id) {
            if (this.state.id !== nextProps.id) {
                newState.id = nextProps.id;
            }
            if (this.state.name !== nextProps.name) {
                newState.name = nextProps.name;
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

        let procedure = { ...this.state };

        this.props.onFormSubmit(procedure);
    }

    render() {
        return (
            <tr>
                <td>
                    <input className="form-control" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <div className="input-group">
                        <input className="form-control" type="number" maxLength={4} placeholder="Expected Duration" name="expected_duration" value={this.state.expected_duration} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                        <span className="input-group-addon">minutes</span>
                    </div>
                </td>
                <td>
                    <div className="input-group">
                        <input className="form-control" type="number" maxLength={4} placeholder="Average Duration" name="average_duration" value={this.state.average_duration} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                        <span className="input-group-addon">minutes</span>
                    </div>
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
                <ProcedureWidget id={this.props.id} name={this.props.name}
                    expectedDuration={this.props.expectedDuration} averageDuration={this.props.averageDuration}
                    onFormSubmit={this.handleUpdateProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </ProcedureWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{formatTime({ minutes: this.props.expectedDuration })}</td>
                <td>{formatTime({ minutes: this.props.averageDuration })}</td>
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
                <ProcedureWidget id={null} name="" expectedDuration="" averageDuration="" onFormSubmit={this.handleAddProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </ProcedureWidget>
            );
        }
        return null;
    }

    render() {
        let procedureItems = this.props.procedures.map((procedure) => {
            return (
                <ProcedureListItem key={procedure.id} id={procedure.id} name={procedure.name} expectedDuration={procedure.expected_duration} averageDuration={procedure.average_duration} onUpdateProcedure={this.props.onUpdateProcedure} />
            )
        });
        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expected Duration</th>
                        <th>Average Duration</th>
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
        }
    }
}

const ProcedureListContainer = connect(mapStateToProps, mapDispatchToProps)(ProcedureList);

export default ProcedureListContainer;