import * as types from '../actions/types';

const initialState = {
    items: [],
    contactNames: [],
    solicitation: null,
    accountName: null,
    pageSize: null,
    currentPage: null,
    totalPages: null,
    hasNextPage: null,
    unreadCount: null,
    scheduledCount: null,
    declinedCount: null,
    hasPreviousPage: null,
    totalCount: null,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_SOLICITATIONS_SUCCESS:
            return Object.assign({}, state, action.payload)

        case types.FETCH_SOLICITATIONS_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.UPDATE_SOLICITATION_SUCCESS:
            var nextItems = state.items.filter(item => item.id !== action.payload.id);
            nextItems.push(action.payload);
            return {
                ...state,
                items: nextItems
            }

        case types.UPDATE_SOLICITATION_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.SETSCHEDULED_SOLICITATION_SUCCESS:
            var nextItems = state.items.filter(item => item.id !== action.payload.id);
            nextItems.push(action.payload);
            return {
                ...state,
                items: nextItems
            }

        case types.SETSCHEDULED_SOLICITATION_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.SETDECLINED_SOLICITATION_SUCCESS:
            var nextItems = state.items.filter(item => item.id !== action.payload.id);
            nextItems.push(action.payload)
            return {
                ...state,
                items: nextItems
            }

        case types.SETDECLINED_SOLICITATION_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.FETCH_CONTACT_NAMES_SUCCESS:
            return Object.assign({}, state, action.payload)

        case types.FETCH_CONTACT_NAMES_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case types.CREATE_SOLICITATION_SUCCESS:
            return {
                ...state,
                solicitation: action.payload
            }

        case types.CREATE_SOLICITATION_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default: 
            return state;
    }
}