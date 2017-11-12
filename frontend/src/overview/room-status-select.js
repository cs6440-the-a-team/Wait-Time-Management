import React from "react"
import {connect} from "react-redux"

const RoomStatusSelect = ({name, value, onChange, roomStatuses}) => {
    return (
        <select name={name} value={value} onChange={onChange}>
            <option value=""> -- Select Room Status -- </option>
            {roomStatuses.map(function(roomStatus) {
                return <option key={roomStatus.id} value={roomStatus.id}>{roomStatus.name}</option>
            })}
        </select>
    )
}

const mapStateToProps = (state, ownProps) => {
    let status_ids = state.room.types[ownProps.roomType].room_statuses,
        statuses = status_ids.map(function(status_id) {
            return state.room.statuses[status_id];
        }).sort(function(a,b) {
            let order_a = parseInt(a.order || 0),
                order_b = parseInt(b.order || 0);

            return order_a - order_b;
        }).filter(function(status) {
            return status || false;
        });

    console.log("Statuses found: ", statuses);

    return {
        roomStatuses: statuses
    }
};

const RoomStatusSelectContainer = connect(mapStateToProps)(RoomStatusSelect);

export default RoomStatusSelectContainer;