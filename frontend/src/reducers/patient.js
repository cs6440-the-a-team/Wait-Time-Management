import {randomCharacters, randomNumbers} from "../utils/random"

const initialState = {
    patients: {
        1: {
            id: 1,
            random_id: randomCharacters(2) + randomNumbers(3),
            name: "Tina Buchanan",
            procedure_id: 1,
            patient_status_id: 1,
            patient_status_start_time: ((new Date()).getTime() / 1000) - 300, // 5 minutes ago
            room_id: 1
        }
    }
}

function generateNewestId(state, lastId=0) {
    let newId = Object.keys(state.patients).length + 1;
    if (lastId > 0) {
        newId = lastId + 1;
    }

    if (state.patients[newId] !== undefined) {
        return generateNewestId(state, newId);
    }
    return newId;
}

function generateRandomId(state) {
    let randId = randomCharacters(2) + randomNumbers(3);

    // Check that it isn't in the state already
    if (state.patients[randId] !== undefined) {
        return generateRandomId(state);
    }
    
    return randId;
}

function patient(state=initialState, action) {
    let newState = null;

    switch(action.type) {
        case 'patient/ADD':

            break;
        case 'patient/UPDATE':

            break;
    }

    return newState || state;
}


export default patient;