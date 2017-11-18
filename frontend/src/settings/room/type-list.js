import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { addRoomType, updateRoomType } from "../../actions"

class RoomTypeWidget extends Component {
    static propTypes = {
        roomTypeId: PropTypes.any,
        roomType: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            room_type_id: props.roomTypeId,
            room_type: props.roomType
        }
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };

        if (this.state.room_type_id) {
            if (this.state.room_type_id !== nextProps.roomTypeId) {
                newState.room_type_id = nextProps.roomTypeId;
            }

            if (this.state.room_type !== nextProps.roomType) {
                newState.room_type = nextProps.roomType;
            }
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
                    <input type="text" name="room_type" className="form-control" placeholder="Name" value={this.state.room_type} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
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

class RoomTypeListItem extends Component {
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

    render() {
        if (this.state.editing) {
            return (
                <RoomTypeWidget {...this.props} onFormSubmit={this.props.onRoomTypeUpdate}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleEdit}>Cancel</a>
                </RoomTypeWidget>
            )
        }
        return (
            <tr>
                <td>{this.props.roomType}</td>
                <td>
                    <a href="#" role="button" className="btn btn-link" onClick={this.toggleEdit}>Edit</a>
                </td>
            </tr>
        )
    }
}

class RoomTypeList extends Component {
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

    handleAddRoomType = (roomType) => {
        this.props.handleAddRoomType(roomType);
        this.setState({
            adding: false
        });
    }

    renderAdding() {
        if (this.state.adding) {
            return (
                <RoomTypeWidget roomTypeId={null} roomType="" onFormSubmit={this.handleAddRoomType}>
                    <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Cancel</a>
                </RoomTypeWidget>
            )
        }

        return null;
    }

    render() {
        let roomTypeItems = this.props.roomTypes.map((roomType) => {
            return (
                <RoomTypeListItem roomTypeId={roomType.room_type_id} roomType={roomType.room_type} onRoomTypeUpdate={this.props.handleUpdateRoomType} key={roomType.room_type_id} />
            )
        });

        return (
            <table className="table table-striped text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <a href="#" role="button" className="btn btn-outline-secondary" onClick={this.toggleAdd}>Add</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAdding()}
                    {roomTypeItems}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    let room_types = Object.keys(state.room.types).map(function (roomTypeId) {
        return state.room.types[roomTypeId];
    });

    return {
        roomTypes: room_types
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleUpdateRoomType: (roomType) => {
            dispatch(updateRoomType(roomType));
        },
        handleAddRoomType: (roomType) => {
            dispatch(addRoomType(roomType));
        }
    }
}

const RoomTypeListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomTypeList);

export default RoomTypeListContainer;
export { RoomTypeList };