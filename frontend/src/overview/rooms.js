import React from "react"
import {connect} from "react-redux"

const Rooms = (props) => {
    return (
        <h5>Rooms go here.</h5>
    )
};

const mapStateToProps = function(state, ownProps) {
    return {
        rooms: []
    }
}

const RoomsContainer = connect(mapStateToProps)(Rooms);

export default RoomsContainer;