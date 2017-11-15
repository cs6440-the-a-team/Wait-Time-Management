import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import RoomTypeSelect from "./room-type-select"

import { timeFormat } from "../../utils/time-helper"
import deNormalizeObject from "../../utils/de-normalize-object"

import { addRoomTypeStatus, updateRoomTypeStatus } from "../../actions"

class RoomStatusWidget extends Component {
    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        roomTypeId: PropTypes.any,
        order: PropTypes.any,
        expectedDuration: PropTypes.any,
        averageDuration: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            room_type_id: props.roomTypeId,
            order: props.order,
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

            if (this.state.room_type_id !== nextProps.roomTypeId) {
                newState.room_type_id = nextProps.roomTypeId;
            }

            if (this.state.order !== nextProps.order) {
                newState.order = nextProps.order;
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

    handleInputChange = (e) => {
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
                    <input type="number" name="order" className="form-control" placeholder="Order" maxLength="4" value={this.state.order} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <div className="input-group">
                        <input type="number" name="expected_duration" className="form-control" placeholder="Expected duration" maxLength="4" value={this.state.expected_duration} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                        <span className="input-group-addon">minutes</span>
                    </div>
                </td>
                <td>
                    <div className="input-group">
                        <input type="number" name="average_duration" className="form-control" placeholder="Average duration" maxLength="4" value={this.state.average_duration} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
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
                <RoomStatusWidget id={this.props.id} name={this.props.name} order={this.props.order} roomTypeId={this.props.roomTypeId} expectedDuration={this.props.expectedDuration} averageDuration={this.props.averageDuration} onFormSubmit={this.handleUpdateRoomStatus}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </RoomStatusWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.roomType}</td>
                <td>{this.props.name}</td>
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
                <RoomStatusWidget id={null} name="" order="" expectedDuration="" averageDuration="" onFormSubmit={this.handleAddRoomStatus}>
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
                    order={roomStatus.order}
                    roomType={roomStatus.room_type}
                    expectedDuration={roomStatus.expected_duration}
                    averageDuration={roomStatus.average_duration}
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
                        <th>Order</th>
                        <th>Expected Duration</th>
                        <th>Average Duration</th>
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
    let room_statuses = deNormalizeObject(state.room.statuses).map(function (room_status) {
        return { ...room_status, room_type: state.room.types[room_status.room_type_id] };
    }).sort(function (a, b) {
        let order_a = parseInt(a.order || 0),
            order_b = parseInt(b.order || 0);

        return order_a - order_b;
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