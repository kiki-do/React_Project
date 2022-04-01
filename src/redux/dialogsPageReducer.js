const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {dialog: [{name: 'Andrew', id: 1},
                 {name: 'Dmitriy', id: 2},
                 {name: 'Sasha', id: 3},
                {name: 'Sveta', id: 4},
                {name: 'Valera', id: 5},
                {name: 'Viktor', id: 6}],

                messages: [{message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                {message:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                {message: 'saassa.'},
                {message: 'saassa.'}
                ],

                newMessageText: ' ' }


const dialogsPageReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = state.newMessageText
            let stateCopy =  {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.newMessageText = ' ';
            stateCopy.messages.push({message: newMessage});
            return stateCopy;
        }

        case UPDATE_MESSAGE_TEXT:{
            let stateCopy =  {...state};
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }

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