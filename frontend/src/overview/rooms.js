import React from "react"
import { connect } from "react-redux"
import moment from "moment";
import LoadingIndicator from "../components/loading-indicator"
import deNormalizeObject from "../utils/de-normalize-object"
import Message from "../components/message"
import RoomStatusSelect from "./room-status-select"
import {updateRoomStatus, dismissRoomError} from "../actions"

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
            buttonText = "Edit";
        if (this.state.editing) {
            statusView = (
                <RoomStatusSelect name="status" roomType={this.props.roomType} value={this.state.status} onChange={this.handleInputChange} />
            );
            buttonText = "Cancel";
        }

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{statusView}</td>
                <td>{this.props.startTime && (moment(this.props.startTime).fromNow(true))}</td>
                <td>{this.props.expectedDuration} minutes</td>
                <td>
                    <a href="#" role="button" onClick={this.toggleEdit}>{buttonText}</a>
                </td>
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
                        <th />
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