import * as types from '../actions/types';

const initialState = {
    id: null,
    gateKey: null,
    companyName: null,
    address: null,
    phoneNumber: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null, 
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_ACCOUNT_SUCCESS:
            return Object.assign({}, state, action.payload)

        case types.FETCH_ACCOUNT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.CREATE_ACCOUNT_SUCCESS:
            return Object.assign({}, state, action.payload);

        case types.CREATE_ACCOUNT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.UPDATE_ACCOUNT_SUCCESS:
            return Object.assign({}, state, action.payload);

        case types.UPDATE_ACCOUNT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}