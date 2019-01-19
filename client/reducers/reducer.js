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
    isPressed: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SHOW_GREETING:
            return {
                ...state,
                data: action.payload
            };
        
        // case types.TOGGLE_HEADER:
        //     const isPressed = state.isPressed === false ? true : false;
        //     return {
        //         ...state,
        //         isPressed,
        //     }

        default: return state;
    }
}

export default reducer;