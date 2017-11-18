import React, {Component} from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { addRoom, updateRoom } from "../../actions"

import RoomWidget from "./room-widget"

class RoomListItem extends Component {

    static propTypes = {
        roomId: PropTypes.any,
        roomName: PropTypes.string,
        roomTypeId: PropTypes.any,
        roomType: PropTypes.string,
        onRoomUpdate: PropTypes.func.isRequired
    };

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
    };

    handleFormSubmit = (room) => {
        this.setState({
            editing: false
        });

        this.props.onRoomUpdate(room);
    };

    render() {
        if (this.state.editing) {
            return (
                <RoomWidget roomId={this.props.roomId} roomName={this.props.roomName} roomTypeId={this.props.roomTypeId} onFormSubmit={this.handleFormSubmit}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </RoomWidget>
            );
        }
        return (
            <tr>
                <td>{this.props.roomName}</td>
                <td>{this.props.roomType}</td>
                <td><a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a></td>
            </tr>
        )
    }
}

class RoomList extends Component {

    static propTypes = {
        rooms: PropTypes.array,
        handleAddRoom: PropTypes.func.isRequired,
        handleUpdateRoom: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            adding_room: false
        };
    }

    toggleAddingRoom = (e) => {
        e.preventDefault();
        this.setState({
            adding_room: !this.state.adding_room
        });
    };

    onAddRoom = (room) => {
        this.setState({
            adding_room: false
        });

        this.props.handleAddRoom(room);
    }

    renderAddingRoom() {
        if (this.state.adding_room) {
            return (
                <RoomWidget roomId={null} roomName="" roomTypeId="" onFormSubmit={this.onAddRoom}>
                    <a role="button" href="#" className="btn btn-xs btn-outline-secondary" onClick={this.toggleAddingRoom}>Cancel</a>
                </RoomWidget>
            );
        }
        return null;
    }

    render(){
    let roomItems = (
        <tr>
            <td colSpan={3}>No rooms yet.</td>
        </tr>
    );

    if (this.props.rooms.length > 0) {
        roomItems = this.props.rooms.map((room) => {
            return (
                <RoomListItem key={room.room_id} roomId={room.room_id} roomName={room.room_name} roomType={room.room_type} roomTypeId={room.room_type_id} onRoomUpdate={this.props.handleUpdateRoom}/>
            );
        })
    }

    return (
        <div className="room-list">
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Room Name</th>
                        <th>Room Type</th>
                        <th>
                            <a role="button" href="#" className="btn btn-outline-secondary" disabled={!this.state.adding_room} onClick={this.toggleAddingRoom}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAddingRoom()}
                    {roomItems}
                </tbody>
            </table>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    let rooms = Object.keys(state.room.rooms).map(function(roomId) {
        let room = state.room.rooms[roomId],
            room_type = "";
        
        if (room.room_type_id && state.room.types[room.room_type_id] !== undefined) {
            room_type = state.room.types[room.room_type_id].room_type;
        }

        return {...room, room_type: room_type};
    }).sort(function(a, b) {
        return a.room_name.localeCompare(b.room_name);
    });

    return {
        rooms: rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddRoom: (room) => {
            dispatch(addRoom(room))
        },
        handleUpdateRoom: (room) => {
            dispatch(updateRoom(room));
        }
    }
}

const RoomListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomList);

export default RoomListContainer;
export {RoomList};