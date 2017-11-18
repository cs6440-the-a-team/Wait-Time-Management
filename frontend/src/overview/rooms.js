import React from "react"
import { connect } from "react-redux"
import moment from "moment";
import LoadingIndicator from "../components/loading-indicator"
import deNormalizeObject from "../utils/de-normalize-object"
import Message from "../components/message"
import RoomStatusSelect from "./room-status-select"
import {updateRoomStatus} from "../actions"
import {minutesSince, formatTime} from "../utils/time-helper"
import AuthorizedComponentContainer from "../containers/authorized-component-container"


const EDIT_ROLES = ['staffplus'];

class RoomItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            room_status_id: props.roomStatusId
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.status !== nextProps.roomStatusId) {
            this.setState({
                room_status_id: nextProps.roomStatusId
            });
        }
    }

    toggleEdit = (e) => {
        e.preventDefault();
        this.setState({
            editing: !this.state.editing
        });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            editing: false
        }, () => {
            this.handleFormSubmit();
        });
    }

    handleFormSubmit = () => {
        this.props.onRoomStatusUpdate(this.props.roomId, this.state.room_status_id);
    }

    render() {
        let statusView = this.state.roomStatus,
            buttonText = "Edit",
            trClasses = [];
        if (this.state.editing) {
            statusView = (
                <RoomStatusSelect name="room_status_id" roomTypeId={this.props.roomTypeId} value={this.state.roomStatusId} onChange={this.handleInputChange} />
            );
            buttonText = "Cancel";
        }

        let elapsed_time = null;
        if (this.props.startTime) {
            elapsed_time = minutesSince(this.props.startTime);

            if (elapsed_time > parseInt(this.props.expectedDuration)) {
                trClasses.push("table-danger");
            }
        }

        return (
            <tr className={trClasses.join(" ")}>
                <td>{this.props.roomName}</td>
                <td>{statusView}</td>
                <td>{formatTime({minutes: elapsed_time})}</td>
                <td>{formatTime({minutes: this.props.expectedDuration})} </td>
                <AuthorizedComponentContainer authorizedRoles={EDIT_ROLES}>
                <td>
                    <a href="#" role="button" onClick={this.toggleEdit}>{buttonText}</a>
                </td>
                </AuthorizedComponentContainer>
            </tr>
        )
    }
};

const Rooms = ({rooms, onRoomStatusUpdate, dismissRoomError}) => {

    let roomItems = (
        <tr>
            <td colSpan="5">
                No rooms yet...
            </td>
        </tr>
    );

    if (rooms.length > 0) {
        roomItems = rooms.map((room) => {
            return (
                <RoomItem key={room.room_id} 
                          roomId={room.room_id} 
                          roomName={room.room_name} 
                          roomStatusId={room.room_status_id} 
                          roomStatus={room.status}
                          roomTypeId={room.room_type_id} 
                          expectedDuration={room.expected_duration} 
                          startTime={room.start_time}
                          onRoomStatusUpdate={onRoomStatusUpdate} />
            )
        });
    }

    return (
        <div className="rooms-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Status</th>
                        <th>Time Elapsed</th>
                        <th>Expected Time</th>
                        <AuthorizedComponentContainer authorizedRoles={EDIT_ROLES}>
                        <th />
                        </AuthorizedComponentContainer>
                    </tr>
                </thead>
                <tbody>
                    {roomItems}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = function (state, ownProps) {

    let rooms = deNormalizeObject(state.room.rooms).map(function(room) {
        room.status = state.room.statuses[room.room_status_id].room_status;
        return room;
    });

    return {
        rooms
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onRoomStatusUpdate: (roomId, status) => {
            dispatch(updateRoomStatus(roomId, status));
        }
    }
}

const RoomsContainer = connect(mapStateToProps, mapDispatchToProps)(Rooms);

export default RoomsContainer;