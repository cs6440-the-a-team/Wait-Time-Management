import React from "react"
import {connect} from "react-redux"

const RoomStatusSelect = ({name, value, onChange, roomStatuses}) => {
    return (
        <select name={name} value={value} onChange={onChange} className="form-control">
            <option value=""> -- Select Room Status -- </option>
            {roomStatuses.map(function(roomStatus) {
                return <option key={roomStatus.room_status_id} value={roomStatus.room_status_id}>{roomStatus.room_status}</option>
            })}
        </select>
    )
}

const mapStateToProps = (state, ownProps) => {
    let statuses = Object.keys(state.room.statuses).map(function(status_id) {
            return state.room.statuses[status_id];
        }).filter(function(status) {
            return status.room_type_id = ownProps.roomTypeId;
        }).sort(function(a,b) {
            let order_a = parseInt(a.room_status_order || 0),
                order_b = parseInt(b.room_status_order || 0);

            return order_a - order_b;
        });

    //console.log("Statuses found: ", statuses);

    return {
        roomStatuses: statuses
    }
};

const RoomStatusSelectContainer = connect(mapStateToProps)(RoomStatusSelect);

export default RoomStatusSelectContainer;