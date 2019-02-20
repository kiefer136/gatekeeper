import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authenticationReducer from './authenticationReducer';
import accountReducer from './accountReducer';
import contactsReducer from './contactsReducer';
import solicitationsReducer from './solicitationsReducer';
import messagesReducer from './messagesReducer';
import passwordReducer from './passwordReducer';

export default combineReducers({
    posts: postReducer,
    authentication: authenticationReducer,
    account: accountReducer,
    contacts: contactsReducer,
    solicitations: solicitationsReducer,
    messages: messagesReducer,
    password: passwordReducer
});