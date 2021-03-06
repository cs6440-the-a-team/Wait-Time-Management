import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import RoomTypeSelect from "./room-type-select"

import { formatTime } from "../../utils/time-helper"
import deNormalizeObject from "../../utils/de-normalize-object"

import { addRoomTypeStatus, updateRoomTypeStatus, deleteRoomTypeStatus } from "../../actions"

class RoomStatusWidget extends Component {
    static propTypes = {
        roomStatusId: PropTypes.any,
        roomStatus: PropTypes.string,
        roomTypeId: PropTypes.any,
        roomStatusOrder: PropTypes.any,
        expectedDuration: PropTypes.any,
        averageDuration: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired,
        onRemoveRoomStatus: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            room_status_id: props.roomStatusId,
            room_status: props.roomStatus,
            room_type_id: props.roomTypeId,
            room_status_order: props.roomStatusOrder,
            expected_duration: props.expectedDuration,
            in_procedure: props.expectedDuration === -1
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };

        if (this.state.room_status_id) {
            if (this.state.room_status_id !== nextProps.roomStatusId) {
                newState.room_status_id = nextProps.roomStatusId;
            }

            if (this.state.room_status !== nextProps.roomStatus) {
                newState.room_status = nextProps.roomStatus;
            }

            if (this.state.room_type_id !== nextProps.roomTypeId) {
                newState.room_type_id = nextProps.roomTypeId;
            }

            if (this.state.room_status_order !== nextProps.roomStatusOrder) {
                newState.room_status_order = nextProps.roomStatusOrder;
            }

            if (this.state.expected_duration !== nextProps.expectedDuration) {
                newState.expected_duration = nextProps.expectedDuration;
                newState.in_procedure = nextProps.expectedDuration === -1;
            }
        }

        this.setState(newState);
    }

    handleInputChange = (e) => {
        let value = e.target.value,
        changes = {
            
        };

        switch (e.target.name) {
            case 'average_duration':
            case 'expected_duration':
            case 'room_status_order':
                value = value.replace(/\D/g, "").trim().substring(0, 4);
                value = parseInt(value || 0);
                break;
            case 'in_procedure':
                value = !this.state.in_procedure;
                if (value) {
                    changes.expected_duration = -1;
                }
                break;
        }

        changes[e.target.name] = value;

        this.setState(changes);
    }

    handleKeyDown = (e) => {
        const keyName = e.key
        if (keyName === "Enter") {
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let { in_procedure, ...room_status } = this.state;

        this.props.onFormSubmit(room_status);
    }

    handleDoneClicked = (e) => {
        e.preventDefault();

        let confirmed = confirm("Are you sure you want to remove this room status from the active system? Historical data will not be removed.");

        if (confirmed) {
            this.props.onRemoveRoomStatus(this.props.roomStatusId);
        }
    };

    renderDeleteButton() {
        if (this.props.roomStatusId) {
            return (
                <a href="#" role="button" className="btn btn-outline-danger" onClick={this.handleDoneClicked} title="Remove"><i className="fa fa-close"/> Remove</a>
            );
        }

        return null;
    }

    render() {
        let expectedDurationProps = {};
        if (this.state.in_procedure) {
            expectedDurationProps.disabled = true;
        }
        return (
            <tr>
                <td>
                    <RoomTypeSelect name="room_type_id" value={this.state.room_type_id} onChange={this.handleInputChange} />
                </td>
                <td>
                    <input type="text" name="room_status" className="form-control" placeholder="Name" value={this.state.room_status} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <input type="number" name="room_status_order" className="form-control" placeholder="Order" maxLength="4" value={this.state.room_status_order} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <div className="input-group">
                        <input type="number" 
                               name="expected_duration" 
                               className="form-control" 
                               placeholder="Expected duration" 
                               maxLength="4" 
                               value={this.state.expected_duration} 
                               onChange={this.handleInputChange} 
                               onKeyDown={this.handleKeyDown} 
                               {...expectedDurationProps} />
                        <span className="input-group-addon">minutes</span>
                    </div>
                    <label htmlFor="in_procedure">
                        <input type="checkbox" name="in_procedure" id="in_procedure" checked={this.state.in_procedure} onChange={this.handleInputChange} />
                        &nbsp;Determined by Procedure Status
                    </label>
                </td>
                <td>
                    {formatTime({minutes: this.props.averageDuration})}
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
                <RoomStatusWidget {...this.props} onFormSubmit={this.handleUpdateRoomStatus}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </RoomStatusWidget>
            )
        }

        let expected_duration = formatTime({ minutes: this.props.expectedDuration });
        if (this.props.expectedDuration === -1) {
            expected_duration = "Determined by procedure status";
        }

        return (
            <tr>
                <td>{this.props.roomType}</td>
                <td>{this.props.roomStatus}</td>
                <td>{this.props.roomStatusOrder}</td>
                <td>{expected_duration}</td>
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
                <RoomStatusWidget roomStatusId={null} roomStatus="" roomTypeId="" roomStatusOrder="" expectedDuration="" averageDuration="" onFormSubmit={this.handleAddRoomStatus}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </RoomStatusWidget>
            )
        }

        return null;
    }

    render() {
        let roomStatuses = this.props.roomStatuses.map((roomStatus) => {
            return (
                <RoomStatusListItem roomStatusId={roomStatus.room_status_id}
                    key={roomStatus.room_status_id}
                    roomStatus={roomStatus.room_status}
                    roomTypeId={roomStatus.room_type_id}
                    roomType={roomStatus.room_type}
                    roomStatusOrder={roomStatus.room_status_order}
                    expectedDuration={roomStatus.expected_duration}
                    averageDuration={roomStatus.average_duration}
                    onRemoveRoomStatus={this.props.onRemoveStatus}
                    onUpdateRoomStatus={this.props.onUpdateStatus} />
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
        return { ...room_status, room_type: state.room.types[room_status.room_type_id].room_type };
    }).sort(function (a, b) {
        let order_a = parseInt(a.room_status_order || 0),
            order_b = parseInt(b.room_status_order || 0),
            type_order_a = parseInt(a.room_type_id || 0),
            type_order_b = parseInt(b.room_type_id || 0);

        let id_diff = type_order_a - type_order_b;

        if (id_diff !== 0) {
            return id_diff;
        }
        
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
        },
        onRemoveStatus: (statusId) => {
            dispatch(deleteRoomTypeStatus(statusId));
        }
    }
}

const RoomStatusListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomStatusList);

export default RoomStatusListContainer;
export { RoomStatusList };