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
            return {
                ...state,
                docData: action.payload
            }

        default: return state;
    }
}

export default reducer;