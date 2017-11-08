import React, {Component} from "react";
import {connect} from "react-redux";

const RoomTypeSelect = ({roomTypes, onChange, name, value}) => {
    return (
        <select className="form-control" name={name} value={value} onChange={onChange}>
            <option value=""> -- Select a Room Type -- </option>
            {roomTypes.map(function(roomType) {
                return (
                    <option value={roomType.id} key={roomType.id}>{roomType.name}</option>
                )
            })}
        </select>
    );
}

const mapStateToProps = function(state) {
    let room_types = Object.keys(state.room.types).map(function(roomTypeId) {
        return state.room.types[roomTypeId];
    });
    return {
        roomTypes: room_types
    }
};

const RoomTypeSelectContainer = connect(mapStateToProps)(RoomTypeSelect);

export default RoomTypeSelectContainer;