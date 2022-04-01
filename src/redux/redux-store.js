import { combineReducers, createStore } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import friendsReducer from './friendsReducer'


let reducers = combineReducers({
    profilesPage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsReducer,
})

let store = createStore(reducers);

export default store;