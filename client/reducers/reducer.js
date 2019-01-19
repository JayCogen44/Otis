/**
 * ************************************
 *
 * @module  reducer
 * @author
 * @date
 * @description reducer for the app
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
    docData: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DOC:
            console.log("This is action.payload: ", action.payload);
            console.log("The content is found at action.payload at index 0: ", action.payload[0].content);
            console.log("Action payload type: ", typeof action.payload)
            console.log("Is action payload an array? ", Array.isArray(action.payload))
            return {
                ...state,
                docData: action.payload[0].content
            }

        default: return state;
    }
}

export default reducer;