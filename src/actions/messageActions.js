import * as types from './types';
import * as statics from './apiStatics';

export const fetchMessages = (msgData) => dispatch => {
    fetch(statics.serverAddress + msgData.gateKey + '/solicitations/' + msgData.solicitationId + '/messages?pageNumber=' + msgData.pageNumber + '&pageSize=' + msgData.pageSize)
    .then(res => res.json())
    .then(messages => dispatch({
        type: types.FETCH_MESSAGES_SUCCESS,
        payload: messages
    }))
    .catch(function(error) {
        console.log(error);
        dispatch({
            type: types.FETCH_MESSAGES_FAILED,
            payload: error
        })
    });
}

export const sendMessage = (msgData, msgObj) => dispatch => {
    fetch(statics.serverAddress + msgData.gateKey + '/solicitations/' + msgData.solicitationId + '/messages', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(msgObj)
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: types.SEND_MESSAGE_SUCCESS,
        payload: msg
    }));
}

export const updateMessage = (accData, msgData) => dispatch => {
    fetch(statics.serverAddress + msgData.gatekey + '/solicitations/' + msgData.solicitationId + '/messages', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(message => dispatch({
        type: types.UPDATE_MESSAGE_SUCCESS,
        payload: message
    }))
    .catch(function(error) {
        dispatch({
            type: types.UPDATE_MESSAGE_FAILED,
            payload: error
        })
    });
}