import * as types from '../actions/types';

const initialState = {
    items: [],
    pageSize: null,
    currentPage: null,
    totalPages: null,
    hasNextPage: null,
    hasPreviousPage: null,
    totalCount: null,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_CONTACTS_SUCCESS:
            return Object.assign({}, state, action.payload)

        case types.FETCH_CONTACTS_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case types.CREATE_CONTACT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        case types.DELETE_CONTACT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.UPDATE_CONTACT_SUCCESS:
            var nextItems = state.items.filter(item => item.id !== action.payload.id);
            nextItems.push(action.payload);
            return {
                ...state,
                items: nextItems
            }

        case types.UPDATE_CONTACT_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}