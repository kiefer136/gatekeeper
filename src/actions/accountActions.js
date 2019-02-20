import * as types from './types';
import * as statics from './apiStatics';

export const fetchAccount = (accData) => dispatch => {
    fetch(statics.serverAddress + accData.id)
    .then(res => res.json())
    .then(account => dispatch({
        type: types.FETCH_ACCOUNT_SUCCESS,
        payload: account
    }))
    .catch(function(error) {
        dispatch({
            type: types.FETCH_ACCOUNT_FAILED,
            payload: error
        })
    });
}

export const createAccount = (accData) => dispatch => {
    fetch(statics.serverAddress, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(accData)
    })
    .then(res => res.json())
    .then(account => dispatch({
        type: types.CREATE_ACCOUNT_SUCCESS,
        payload: account
    }))
    .catch(function(error) {
        dispatch({
            type: types.CREATE_ACCOUNT_FAILED,
            payload: error
        })
    });
}

export const updateAccount = (accData, id) => dispatch => {
    fetch(statics.serverAddress + id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(accData)
    })
    .then(res => res.json())
    .then(account => dispatch({
        type: types.UPDATE_ACCOUNT_SUCCESS,
        payload: account
    }))
    .catch(function(error) {
        dispatch({
            type: types.UPDATE_ACCOUNT_FAILED,
            payload: error
        })
    });
}