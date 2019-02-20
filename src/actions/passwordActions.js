import * as types from './types';
import * as statics from './apiStatics';

export const createPasswordReset = (resetData) => dispatch => {
    fetch(statics.serverAddress + 'resetpassword', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(resetData)
    })
    .then(res => res.json())
    .then(reset => dispatch({
        type: types.CREATE_PASSWORD_RESET_SUCCESS,
        payload: reset
    }))
    .catch(function(error) {
        dispatch({
            type: types.CREATE_PASSWORD_RESET_FAILED,
            payload: error
        })
    })
}

export const resetPassword = (id) => dispatch => {
    fetch(statics.serverAddress + 'resetpassword/' + id, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(reset => dispatch({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: reset
    }))
    .catch(function(error) {
        dispatch({
            type: types.RESET_PASSWORD_FAILED,
            payload: error
        })
    })
}