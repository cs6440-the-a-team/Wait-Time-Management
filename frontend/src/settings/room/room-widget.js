import React, { Component } from "react"
import PropTypes from "prop-types"
import RoomTypeSelect from "./room-type-select"

class RoomWidget extends Component {

    static propTypes = {
        roomId: PropTypes.any,
        roomName: PropTypes.string,
        roomTypeId: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            room_id: props.roomId,
            room_name: props.roomName,
            room_type_id: props.roomTypeId
        };
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };

        if (this.state.room_id) {
            if (this.state.room_id != nextProps.roomId) {
                newState.room_id = nextProps.roomId;
            }
            if (this.state.room_name != nextProps.roomName) {
                newState.room_name = nextProps.roomName;
            }
            if (this.state.room_type_id != nextProps.roomTypeId) {
                newState.room_type_id = nextProps.roomTypeId;
            }
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

        let room = { ...this.state };

        this.props.onFormSubmit(room);
    }

    handleDoneClicked = (e) => {
        e.preventDefault();

        let confirmed = confirm("Are you sure you want to remove this room from the active system? Historical data will not be removed.");

        if (confirmed) {
            this.props.onRemoveRoom(this.props.roomId);
        }
    };

    renderDeleteButton() {
        if (this.props.roomId) {
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
                    <input className="form-control" type="text" placeholder="Name" name="room_name" value={this.state.room_name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown} />
                </td>
                <td>
                    <RoomTypeSelect onChange={this.onInputChange} name="room_type_id" value={this.state.room_type_id} />
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

export default RoomWidget;