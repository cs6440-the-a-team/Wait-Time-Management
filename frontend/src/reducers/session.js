import uuid from "uuid/v1";
import immutable from "immutable"

const initialState = immutable.fromJS({
    messages: {},
    loading: false,
    is_logged_in: false,
    token: null,
    role: null,
    expires: 0 // TODO make expiration work?
});

function session(state=initialState, action) {
    let newState = null;

    switch (action.type) {
        case 'message/ADD':
            let newId = uuid();
            newState = state.setIn(['messages', newId], {id: newId, type: action.messageType, body: action.body});
            break;
        case 'message/REMOVE':
            newState = state.removeIn(['messages', action.id]);
            break;
        case 'network/START':
            newState = state.set('loading', true);
            break;
        case 'network/STOP':
            newState = state.set('loading', false);
            break;
        case 'session/LOGIN/success':
            newState = state.set('is_logged_in', true);
            newState = newState.set('token', action.token);
            newState = newState.set('role', action.role);
            newState = newState.set('expires', action.expires);
            break;
        case 'session/LOGOUT':
            newState = state.set('is_logged_in', false);
            newState = newState.set('token', null);
            newState = newState.set('role', null);
            newState = newState.set('expires', 0);
            break;
    }

    return newState || state;
}

export default session;