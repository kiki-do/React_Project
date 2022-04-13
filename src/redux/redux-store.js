import { combineReducers, createStore } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import friendsReducer from './friendsReducer'
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilesPage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store

export default store;