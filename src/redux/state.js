const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
        _state: {
                profilesPage:{
                        
                                posts: [{message: 'Are you gay?'},
                                {message:'Fuck you? '}
                                ]},
        
                                newPostText:' ',
                
                
                dialogsPage:{
                                dialog: [{name: 'Andrew', id: 1},
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
                                ]},

                                newMessageText: ' ' 


        },

        _callSubscriber(){
                console.log('State was changed!')
        },
        
        _addPost(){
                let newPost = {
                        message: this._state.profilesPage.newPostText
                };
        
                this._state.profilesPage.posts.push(newPost);
                this._state.profilesPage.newPostText = ' ';
                this._callSubscriber(this._state);       
        },

        _addMessage(){
                let newMessage = this._state.dialogsPage.newMessageText
                this._state.dialogsPage.newMessageText = ' ';
                this._state.dialogsPage.messages.push({message: newMessage});
                this._callSubscriber(this._state);
        },

        _updateMessageText(newMessage){
                this._state.dialogsPage.newMessageText = newMessage;
                this._callSubscriber(this._state);
        },

        _updatePostText(newText){
                this._state.profilesPage.newPostText = newText;
                this._callSubscriber(this._state);
        },

        getState(){
                return this._state;
        },
        
        subscribe(observer){
                this._callSubscriber = observer;
        },



        dispatch(action){
                if(action.type === ADD_POST) this._addPost();
                else if(action.type === UPDATE_POST_TEXT)  this._updatePostText(action.newText);
                else if (action.type === ADD_MESSAGE) this._addMessage();
                else if (action.type === UPDATE_MESSAGE_TEXT) this._updateMessageText(action.newMessage);
        }
}

export const addPostActionCreator = () => {
   return {type: ADD_POST}
}

export const updatePostTextCreator = (text) => {
        return {type: UPDATE_POST_TEXT, newText: text}
     }
     
export const addMessageActionCreator = () => {
        return {type: ADD_MESSAGE};
}

export const updateMessageTextActionCreator = (text) => {
        return {type: UPDATE_MESSAGE_TEXT, newMessage: text};
}

export default store;