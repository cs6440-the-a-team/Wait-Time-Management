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
            newState = {...state, loading: false, error: null, rooms: normalizeArray(action.rooms, "room_id")};
            break;
        case 'room-type/LISTED':
            newState = {...state, loading: false, error: null, types: normalizeArray(action.roomTypes, "room_type_id")};
            break;
        case 'room-type-status/LISTED':
            newState = {...state, statuses: normalizeArray(action.roomTypeStatuses, "room_status_id")};
            break;
        case 'room-type-status/ADDED':
        case 'room-type-status/UPDATED':
            let newStatuses = {...state.statuses, [action.roomTypeStatus.room_status_id]: action.roomTypeStatus};
            newState = {...state, statuses: newStatuses};
            break;
        case 'room/ADDED':
        case 'room/UPDATED':
            let updatedRooms = {...state.rooms, [action.room.room_id]: action.room};
            newState = {...state, rooms: updatedRooms};
            break;
        case 'room-type/ADDED':
        case 'room-type/UPDATED':
            let updatedTypes = {...state.types, [action.roomType.room_type_id]: action.roomType};
            newState = {...state, types: updatedTypes};
            break;

        case 'room/DELETED':
            let remainingRooms = Object.assign({}, state.rooms);
            delete remainingRooms[action.roomId];
            newState = {...state, rooms: remainingRooms};
            break;
        case 'room-type/DELETED':
            let remainingRoomTypes = Object.assign({}, state.types);
            delete remainingRoomTypes[action.roomTypeId];
            newState = {...state, types: remainingRoomTypes};
            break;
        case 'room-type-status/DELETED':
            let remainingRoomTypeStatuses = Object.assign({}, state.statuses);
            delete remainingRoomTypeStatuses[action.roomTypeStatusId];
            newState = {...state, statuses: remainingRoomTypeStatuses};
            break;
        
        case 'room/status/UPDATED':
            let updatedRoom = { ...state.rooms[action.roomId], room_status_id: action.roomStatusId, start_time: action.startTime };
            let updatedRooms2 = {...state.rooms, [action.roomId]: updatedRoom};
            newState = {...state, rooms: updatedRooms2};
            break;
        case 'session/LOGOUT':
            newState = initialState;
            break;
    }

    return newState || state;
}

export default room;