/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const showGreeting = data => ({
    type: types.SHOW_GREETING,
    payload: data
})