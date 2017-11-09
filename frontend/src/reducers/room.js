const initialState = {
    rooms: {
        1: {
            id: 1,
            name: "Operation Room 1",
            room_type_id: 1,
            room_status_id: 1,
            room_status_start_time: ((new Date()).getTime() / 1000) - 600, // 10 minutes ago
            patient_status_id: 1
        },
        2: {
            id: 2,
            name: "Waiting Area 1",
            room_type_id: 2
        }
    },
    types: {
        1: {
            id: 1,
            name: "Operation Room"
        },
        2: {
            id: 2,
            name: "Waiting Area"
        },
        3: {
            id: 3,
            name: "Prep Room"
        }
    },
    statuses: {
        1: {
            id: 1,
            name: "Ready",
            avg_time_in_status: 5 // 5 minutes
        },
        2: {
            id: 2,
            name: "Full",
            avg_time_in_status: 60 // 1 hour
        },
        3: {
            id: 3,
            name: "Cleaning",
            avg_time_in_status: 15 // 15 minutes
        },
        4: {
            id: 4,
            name: "Turned Over",
            avg_time_in_status: 5 // 5 minutes
        }
    }
}

const room = function(state=initialState, action) {

    let newState = null;
    switch(action.type) {
        case 'room/ADD':
            let id = Object.keys(state.rooms).length + 1;
            let newRooms = {...state.rooms, [id]: {...action.room, id}};
            newState = {...state, rooms: newRooms};
            break;
        case 'room/UPDATE':
            let updatedRooms = {...state.rooms, [action.room.id]: action.room};
            newState = {...state, rooms: updatedRooms};
            break;
        case 'room-type/ADD':
            let typeId = Object.keys(state.types).length + 1;
            let newTypes = {...state.types, [typeId]: {...action.roomType, id: typeId}};
            newState = {...state, types: newTypes};
            break;
        case 'room-type/UPDATE':
            let updatedTypes = {...state.types, [action.roomType.id]: action.roomType};
            newState = {...state, types: updatedTypes};
            break;
        case 'room-status/ADD':
            let statusId = Object.keys(state.statuses).length + 1;
            let newStatuses = {...state.statuses, [statusId]: {...action.roomStatus, id: statusId}};
            newState = {...state, statuses: newStatuses};
            break;
        case 'room-status/UPDATE':
            let updatedStatuses = {...state.statuses, [action.roomStatus.id]: action.roomStatus};
            newState = {...state, statuses: updatedStatuses};
            break;
    }

    return newState || state;
}

export default room;