import * as types from '../actions/types';

const initialState = {
    reset: null,
    success: null,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.CREATE_PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                reset: action.payload
            }

        case types.CREATE_PASSWORD_RESET_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                success: true
            }

        case types.RESET_PASSWORD_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}