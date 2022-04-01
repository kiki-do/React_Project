import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';



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

                                newMessageText: ' ',

                friendsPage: {
                                user: [{name: "Dmitriy K", id: 1},
                                        {name: "Svetlana D",id: 2},
                                        {name: "Sergei S",id: 3},
                                        {name: "Andrew T", id: 5}],

                                description: [{message: "I`m looking a job right now..."},
                                                {message: "I`m so pretty"},
                                                {message: "I like football !!!"},
                                                {message: "I am free to help you to create the good Video Poduction"}],
                                
                                countries:      [{country: "Belarus, Minsk"},
                                                {country: "Belarus, Minsk"},
                                                {country: "Ukraine, Kiev"},
                                                {country: "USA, Philadelphia"}],
                },

        },
        

        _callSubscriber(){
                console.log('State was changed!')
        },
        

        getState(){
                return this._state;
        },
        
        subscribe(observer){
                this._callSubscriber = observer;
        },



        dispatch(action){
                this._state.profilesPage=profilePageReducer(this._state.profilesPage, action);
                this._state.dialogsPage=dialogsPageReducer(this._state.dialogsPage, action);
                this._callSubscriber(this._state);
        }
}

export default store;