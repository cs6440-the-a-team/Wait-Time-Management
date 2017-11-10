import React, {Component} from "react"
import PropTypes from "prop-types"
import RoomTypeSelect from "./room-type-select"

class RoomWidget extends Component {

    static propTypes = {
        id: PropTypes.any,
        name: PropTypes.string,
        roomTypeId: PropTypes.any,
        onFormSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            room_type_id: props.roomTypeId
        };
    }

    componentWillReceiveProps(nextProps) {
        let newState = { ...this.state };

        if (this.state.id != nextProps.id) {
            newState.id = nextProps.id;
        }
        if (this.state.name != nextProps.name) {
            newState.name = nextProps.name;
        }
        if (this.state.room_type_id != nextProps.roomTypeId) {
            newState.room_type_id = nextProps.roomTypeId;
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

        let room = {...this.state};

        this.props.onFormSubmit(room);
    }

    render() {
        return (
            <tr>
                <td>
                    <input className="form-control" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onInputChange} onKeyDown={this.handleKeyDown}/>
                </td>
                <td>
                    <RoomTypeSelect onChange={this.onInputChange} name="room_type_id" value={this.state.room_type_id} />
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

export default RoomWidget;