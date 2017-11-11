import React from "react"
import {connect} from "react-redux"
import deNormalizeObject from "../utils/de-normalize-object"

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
    let statuses = deNormalizeObject(state.room.statuses).filter(function(room_status) {
        return room_status.room_type_id === ownProps.roomType;
    });

    console.log("Statuses found: ", statuses);

    return {
        roomStatuses: statuses
    }
};

const RoomStatusSelectContainer = connect(mapStateToProps)(RoomStatusSelect);

export default RoomStatusSelectContainer;