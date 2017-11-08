import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {addProcedure, updateProcedure} from "../../actions"

class ProcedureWidget extends Component {
    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        expectedDuration: PropTypes.string,
        avgDuration: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
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

        let procedure = {...this.state};

        this.props.onFormSubmit(procedure);
    }

    render() {
        return (
            <tr>
                <td>
                    <input className="form-control" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
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
                                 expectedDuration={this.props.expectedDuration} avgDuration={this.props.avgDuration} 
                                 onFormSubmit={this.handleUpdateProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </ProcedureWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.expectedDuration} minutes</td>
                <td>{this.props.avgDuration} minutes</td>
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
                <ProcedureWidget id={null} name="" expectedDuration="" avgDuration="" onFormSubmit={this.handleAddProcedure}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </ProcedureWidget>
            );
        }
        return null;
    }

    render() {
        let procedureItems = this.props.procedures.map((procedure) => {
            return (
                <ProcedureListItem key={procedure.id} id={procedure.id} name={procedure.name} expectedDuration={procedure.expected_duration} avgDuration={procedure.avg_duration} onUpdateProcedure={this.props.onUpdateProcedure} />
            )
        });
        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expected duration</th>
                        <th>Avg. duration</th>
                        <th>
                            <a role="button" href="#" className="btn btn-outline-secondary" disabled={!this.state.adding_room} onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {procedureItems}
                    {this.renderAdding()}
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = function(state, ownProps) {
    let procedures = Object.keys(state.procedure.procedures).map(function(procedure_id) {
        return state.procedure.procedures[procedure_id];
    });

    return {
        procedures
    }
}

const mapDispatchToProps = function(dispatch) {
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