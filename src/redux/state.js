import {rerenderEntireTree} from '../render';


let state = {
        profilesPage:{
                
                        posts: [{message: 'Are you gay?'},
                        {message:'Fuck you? '}
                        ]},
        
        
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
                        ]}
}


export let addPost = (PostMessage) => {
        let newPost = {
                message: PostMessage
        };

        state.profilesPage.posts.push(newPost);
        rerenderEntireTree(state);
}



export default state;