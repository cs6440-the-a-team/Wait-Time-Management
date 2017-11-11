import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import RoomTypeSelect from "./room-type-select"

import deNormalizeObject from "../../utils/de-normalize-object"

import { addRoomTypeStatus, updateRoomTypeStatus } from "../../actions"

class RoomStatusWidget extends Component {
    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            room_type_id: props.roomTypeId,
            avg_time_in_status: props.avgTimeInStatus
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };
        if (this.state.id !== nextProps.id) {
            newState.id = nextProps.id;
        }

        if (this.state.name !== nextProps.name) {
            newState.name = nextProps.name;
        }

        if (this.state.room_type_id !== nextProps.roomTypeId) {
            newState.room_type_id = nextProps.roomTypeId;
        }

        if (this.state.avg_time_in_status !== nextProps.avgTimeInStatus) {
            newState.avg_time_in_status = nextProps.avgTimeInStatus;
        }

        this.setState(newState);
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleKeyDown = (e) => {
        const keyName = e.key
        if (keyName === "Enter") {
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit({ ...this.state });
    }

    render() {
        return (
            <tr>
                <td>
                    <RoomTypeSelect name="room_type_id" value={this.state.room_type_id} onChange={this.handleInputChange} />
                </td>
                <td>
                    <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <input type="number" name="avg_time_in_status" className="form-control" placeholder="Average time in status" value={this.state.avg_time_in_status} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                    <p className="help-block">Minutes</p>
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

class RoomStatusListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    toggleEdit = (e) => {
        e.preventDefault();

        this.setState({
            editing: !this.state.editing
        });
    }

    handleUpdateRoomStatus = (roomStatus) => {
        this.props.onUpdateRoomStatus(roomStatus);

        this.setState({
            editing: false
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <RoomStatusWidget id={this.props.id} name={this.props.name} roomTypeId={this.props.roomTypeId} avgTimeInStatus={this.props.avgTimeInStatus} onFormSubmit={this.handleUpdateRoomStatus}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </RoomStatusWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.roomType}</td>
                <td>{this.props.name}</td>
                <td>{this.props.avgTimeInStatus} minutes</td>
                <td>
                    <a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a>
                </td>
            </tr>
        )
    }
}

class RoomStatusList extends Component {

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
    };

    handleAddRoomStatus = (roomStatus) => {
        this.props.onAddStatus(roomStatus);
        this.setState({
            adding: false
        });
    }

    renderAdding() {
        if (this.state.adding) {
            return (
                <RoomStatusWidget id={null} name="" avgTimeInStatus="" onFormSubmit={this.handleAddRoomStatus}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </RoomStatusWidget>
            )
        }

        return null;
    }

    render() {
        let roomStatuses = this.props.roomStatuses.map((roomStatus) => {
            return (
                <RoomStatusListItem id={roomStatus.id} 
                                    name={roomStatus.name} 
                                    roomTypeId={roomStatus.room_type_id} 
                                    roomType={roomStatus.room_type} 
                                    avgTimeInStatus={roomStatus.avg_time_in_status} 
                                    onUpdateRoomStatus={this.props.onUpdateStatus} 
                                    key={roomStatus.id} />
            )
        });

        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Room Type</th>
                        <th>Name</th>
                        <th>Avg. time in status</th>
                        <th>
                            <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAdding()}
                    {roomStatuses}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    let room_statuses = deNormalizeObject(state.room.statuses).map(function(room_status) {
        return {...room_status, room_type: state.room.types[room_status.room_type_id]};
    });

    return {
        roomStatuses: room_statuses
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onAddStatus: (newStatus) => {
            dispatch(addRoomTypeStatus(newStatus));
        },
        onUpdateStatus: (status) => {
            dispatch(updateRoomTypeStatus(status));
        }
    }
}

const RoomStatusListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomStatusList);

export default RoomStatusListContainer;
export { RoomStatusList };