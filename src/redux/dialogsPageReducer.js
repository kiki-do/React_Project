const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';




const dialogsPageReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ' ';
            state.messages.push({message: newMessage});
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default: return state;
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export const updateMessageTextActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, newMessage: text};
}

export default dialogsPageReducer;