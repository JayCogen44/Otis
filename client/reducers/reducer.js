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
    data: 'Hey dudes',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SHOW_GREETING:
            return {
                ...state,
                data: action.payload
            };

        default: return state;
    }
}

export default reducer;