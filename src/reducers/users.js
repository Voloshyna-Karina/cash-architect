import {actionTypes} from "../actions/index.js";

const initialState = {
    name: null,
}

export default function combinedUserReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_PENDING:
        return {
            ...state,
            name: null,
        }

        default:
            return state;
    }
}