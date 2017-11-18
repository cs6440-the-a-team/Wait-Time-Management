import React from "react"
import {connect} from "react-redux"
import deNormalizeObject from "../utils/de-normalize-object"

const RoomSelect = ({name, options, value, onChange}) => {

    let roomOptions = options.map(function(option) {
        return <option key={option.room_id} value={option.room_id}>{option.room_name}</option>
    });

    return (
        <select name={name} value={value} onChange={onChange} className="form-control">
            <option value=""> -- Select a Room -- </option>
            {roomOptions}
        </select>
    )
};

const mapStateToProps = (state) => {
    return {
        options: deNormalizeObject(state.room.rooms)
    }
};

const RoomSelectContainer = connect(mapStateToProps)(RoomSelect);

export default RoomSelectContainer;