import * as types from '../actions/types';

const initialState = {
    success: null,
    id: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                success: true,
                id: action.payload.accountId
            }
        case types.AUTHENTICATION_FAILED:
            return {
                ...state,
                success: false,
                id: null
            }

        default:
            return state;
    }
}