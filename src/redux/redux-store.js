import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import friendsReducer from './friendsReducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilesPage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
