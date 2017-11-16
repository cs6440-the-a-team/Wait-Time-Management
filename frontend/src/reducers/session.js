import uuid from "uuid/v1";
import immutable from "immutable"

const initialState = immutable.fromJS({
    messages: {},
    loading: false,
    requests_pending: 0,
    is_logged_in: false,
    token: null,
    role: "",
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
            newState = newState.set('requests_pending', state.get('requests_pending') + 1);
            break;
        case 'network/STOP':
            let requests_pending = state.get('requests_pending') - 1,
                loading = state.get('loading');
            if (requests_pending <= 0) {
                requests_pending = 0;
                loading = false;
            }
            newState = state.set('requests_pending', requests_pending);
            newState = newState.set('loading', loading);
            break;
        case 'session/LOGIN/success':
            newState = state.set('is_logged_in', true);
            newState = newState.set('token', action.token);
            newState = newState.set('role', action.role);
            newState = newState.set('expires', action.expires);
            break;
        case 'session/LOGOUT':
            newState = initialState;
            break;
    }

    return newState || state;
}

export default session;