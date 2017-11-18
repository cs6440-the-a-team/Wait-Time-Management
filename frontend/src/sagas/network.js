import { put, call } from "redux-saga/effects"
import { networkStart, networkStop, addMessage } from "../actions";

function* makeRequest(fn, args=[]) {
    let response = null,
        error = null;

    //console.log("Network request prepping...", fn, args);
    yield put(networkStart());

    try {
        //console.log("Network request starting...", fn, args);
        response = yield call(fn, ...args);
        //console.log("Network request stopping...", fn, args);
        yield put(networkStop());
        if (response.ok) {
            response = yield response.json();
        }
        else {
            throw new Error("Request failed. Status: " + response.status + " -- " + response.statusText);
        }

        return response;
    }
    catch(err) {
        //console.log("Network exception request stopping...", fn, args);
        yield put(networkStop());
        throw err;
    }
}

export {makeRequest};