import * as types from './types';
import * as statics from './apiStatics';

export const fetchSolicitations = (accData) => dispatch => {
    fetch(statics.serverAddress + accData.gateKey + '/solicitations?pageNumber=' + accData.pageNumber + '&pageSize=' + accData.pageSize)
    .then(res => res.json())
    .then(solicitations => dispatch({
        type: types.FETCH_SOLICITATIONS_SUCCESS,
        payload: solicitations
    }))
    .catch(function(error) {
        console.log(error);
        dispatch({
            type: types.FETCH_SOLICITATIONS_FAILED,
            payload: error
        })
    });
}

export const createSolicitation = (gateKey, solData) => dispatch => {
    fetch(statics.serverAddress + gateKey + '/solicitations/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(solData)
    })
    .then(res => res.json())
    .then(solicitation => dispatch({
        type: types.CREATE_SOLICITATION_SUCCESS,
        payload: solicitation
    }))
    .catch(function(error) {
        dispatch({
            type: types.CREATE_SOLICITATION_FAILED,
            payload: error
        })
    })
}

export const updateSolicitation = (accData, solData, id) => dispatch => {
    fetch(statics.serverAddress + accData.gateKey + '/solicitations/' + id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json' 
        },
        body: JSON.stringify(solData)
    })
    .then(res => res.json())
    .then(solicitation => dispatch({
        type: types.UPDATE_SOLICITATION_SUCCESS,
        payload: solicitation
    }))
    .catch(function(error) {
        dispatch({
            type: types.UPDATE_SOLICITATION_FAILED,
            payload: error
        })
    })
}

export const setSolicitationScheduled = (accData, solData, id) => dispatch => {
    fetch(statics.serverAddress + accData.gateKey + '/solicitations/schedule/' + id, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(solData)
    })
    .then(res => res.json())
    .then(solicitation => dispatch({
        type: types.SETSCHEDULED_SOLICITATION_SUCCESS,
        payload: solicitation
    }))
    .catch(function(error) {
        dispatch({
            type: types.SETSCHEDULED_SOLICITATION_FAILED,
            payload: error
        })
    })
}

export const setSolicitationDeclined = (accData, solData, id) => dispatch => {
    fetch(statics.serverAddress + accData.gateKey + '/solicitations/decline/' + id, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(solData)
    })
    .then(res => res.json())
    .then(solicitation => dispatch({
        type: types.SETDECLINED_SOLICITATION_SUCCESS,
        payload: solicitation
    }))
    .catch(function(error) {
        dispatch({
            type: types.SETDECLINED_SOLICITATION_FAILED,
            payload: error
        })
    })
}

export const getContactNamesForAccount = (gateKey) => dispatch => {
    fetch(statics.serverAddress + gateKey + '/solicitations/contactNames', {
        method: 'GET',
        headers: {
            'content-type': 'applications/json',
            'accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(contacts => dispatch({
        type: types.FETCH_CONTACT_NAMES_SUCCESS,
        payload: contacts
    }))
    .catch(function(error) {
        dispatch({
            type: types.FETCH_CONTACT_NAMES_FAILED,
            payload: error
        })
    })
}