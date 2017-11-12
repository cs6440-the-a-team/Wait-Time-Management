import normalizeArray from "../utils/normalize-array"

const initialState = {
    rooms: {},
    types: {},
    statuses: {}
};

const room = function(state=initialState, action) {
    let newState = null;
    switch(action.type) {
        case 'room/LISTED':
            newState = {...state, loading: false, error: null, rooms: normalizeArray(action.rooms)};
            break;
        case 'room-type/LISTED':
            newState = {...state, loading: false, error: null, types: normalizeArray(action.room_types)};
            break;
        case 'room-type-status/LISTED':
            newState = {...state, statuses: normalizeArray(action.roomTypeStatuses)};
            break;
        case 'room-type-status/ADDED':
        case 'room-type-status/UPDATED':
            let newStatuses = {...state.statuses, [action.roomTypeStatus.id]: action.roomTypeStatus};
            newState = {...state, statuses: newStatuses};
            break;
        case 'room/ADDED':
        case 'room/UPDATED':
            let updatedRooms = {...state.rooms, [action.room.id]: action.room};
            newState = {...state, rooms: updatedRooms};
            break;
        case 'room-type/ADDED':
        case 'room-type/UPDATED':
            let updatedTypes = {...state.types, [action.roomType.id]: action.roomType};
            newState = {...state, types: updatedTypes};
            break;
        case 'room/status/UPDATED':
            let updatedRoom = {...state.rooms[action.roomId], room_status_id: action.roomStatusId};
            newState = {...state, loading: false, error: null, rooms: {...state.rooms, [action.roomId]: updatedRoom}};
            break;
    }

    return newState || state;
}

export default room;