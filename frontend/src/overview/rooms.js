import React from "react"
import { connect } from "react-redux"
import moment from "moment";
import LoadingIndicator from "../components/loading-indicator"
import deNormalizeObject from "../utils/de-normalize-object"
import Message from "../components/message"
import RoomStatusSelect from "./room-status-select"
import {updateRoomStatus, dismissRoomError} from "../actions"
import {minutesSince, formatTime} from "../utils/time-helper"
import AuthorizedComponentContainer from "../containers/authorized-component-container"


const EDIT_ROLES = ['staffplus'];

class RoomItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            status: props.status
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.status !== nextProps.status) {
            this.setState({
                status: nextProps.status
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
        this.props.onRoomStatusUpdate(this.props.roomId, this.state.status);
    }

    render() {
        let statusView = this.state.status,
            buttonText = "Edit",
            trClasses = [];
        if (this.state.editing) {
            statusView = (
                <RoomStatusSelect name="status" roomType={this.props.roomType} value={this.state.status} onChange={this.handleInputChange} />
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
                <td>{this.props.name}</td>
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

const Rooms = ({isLoading, error, rooms, onRoomStatusUpdate, dismissRoomError}) => {

    let roomItems = (
        <tr>
            <td colSpan="5">
                No rooms yet...
            </td>
        </tr>
    ),
    errorMsg = null;

    if (rooms.length > 0) {
        roomItems = rooms.map((room) => {
            return (
                <RoomItem key={room.id} 
                          roomId={room.id} 
                          name={room.name} 
                          status={room.status} 
                          roomType={room.room_type} 
                          expectedDuration={room.expected_duration} 
                          startTime={room.start_time}
                          onRoomStatusUpdate={onRoomStatusUpdate} />
            )
        });
    }

    if (error) {
        errorMsg = (
            <Message id="error-message" onClose={dismissRoomError} type="error">
                {error.toString()}
            </Message>
        )
    }

    return (
        <div className="rooms-wrapper">
            <LoadingIndicator active={isLoading} />
            {errorMsg}
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
        room.status = state.room.statuses[room.room_status_id];
        return room;
    });

    return {
        isLoading: state.room.loading,
        error: state.room.error,
        rooms: rooms
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onRoomStatusUpdate: (roomId, status) => {
            dispatch(updateRoomStatus(roomId, status));
        },
        dismissRoomError: () => {
            dispatch(dismissRoomError());
        }
    }
}

const RoomsContainer = connect(mapStateToProps, mapDispatchToProps)(Rooms);

export default RoomsContainer;