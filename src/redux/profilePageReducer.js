const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


let initialState = {
 
    posts: [{message: 'Are you gay?'},
    {message:'Fuck you? '}
    ],

    newPostText:' '
};

const profilePageReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST:  {
            let newPost = {
                message: state.newPostText
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ' ';  
            return stateCopy;
        }

        case UPDATE_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        
        default: return state;
    }  
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
 }
 
export const updatePostTextCreator = (text) => {
        return {type: UPDATE_POST_TEXT, newText: text}
}
      

export default profilePageReducer;