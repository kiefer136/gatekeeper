import * as types from  '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case types.NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state;
    }
};