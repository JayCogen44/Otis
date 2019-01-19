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

export const getDoc = id => (dispatch) => {
    fetch(`/dev-server/doc?${id}`)
        .then(res => res.json())
        .then(jsonData => {
            dispatch({
                type: types.GET_DOC,
                payload: jsonData,
            });
        });
}