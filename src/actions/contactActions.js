import * as types from './types';
import * as statics from './apiStatics';

export const fetchContacts = (accData) => dispatch => {
    fetch(statics.serverAddress + accData.id + '/contacts?pageNumber=' + accData.pageNumber + '&pageSize='+ accData.pageSize)
    .then(res => res.json())
    .then(contacts => dispatch({
        type: types.FETCH_CONTACTS_SUCCESS,
        payload: contacts
    }))
    .catch(function(error) {
        dispatch({
            type: types.FETCH_CONTACTS_FAILED,
            payload: error    
        })
    });
}

export const createContact = (accData, conData) => dispatch => {
    fetch(statics.serverAddress + accData.id + '/contacts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(conData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: types.CREATE_CONTACT_SUCCESS,
        payload: post
    }));
}

export const deleteContact = (accData, conData) => dispatch => {
    fetch(statics.serverAddress + accData.id + '/contacts/' + conData.id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    })
    .then(() => dispatch({
        type: types.DELETE_CONTACT_SUCCESS,
        payload: conData.id
    }));
}

export const updateContact = (accData, conData, id) => dispatch => {
    fetch(statics.serverAddress + accData.id + '/contacts/' + id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(conData)
    })
    .then(res => res.json())
    .then(contact => dispatch({
        type: types.UPDATE_CONTACT_SUCCESS,
        payload: contact
    }))
    .catch(function(error) {
        dispatch({
            type: types.UPDATE_CONTACT_FAILED,
            payload: error
        })
    });
}