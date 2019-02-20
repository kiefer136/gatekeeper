import * as types from './types';
import * as statics from './apiStatics';

export const authenticate = (authData) => dispatch => {
    fetch(statics.serverAddress + 'authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(authData)
    })
    .then(res => res.json())
    .then(authResponse => {
        const success = authResponse.success;

        if(success === true)
        {
            dispatch({
                type: types.AUTHENTICATION_SUCCESS,
                payload: authResponse
            });
        }
        else
        {
            dispatch({
                type: types.AUTHENTICATION_FAILED,
                payload: authResponse
            });
        }
    })
    .catch(function(error) {
        dispatch({
            type: types.AUTHENTICATION_FAILED,
            payload: error
        });
    });
}