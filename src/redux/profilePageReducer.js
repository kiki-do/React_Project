const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const GET_PROFILE = 'GET_PROFILE';


let initialState = {
 
    posts: [{message: 'Are you gay?'},
    {message:'Fuck you? '}
    ],

    newPostText:' ',
    profile:null,
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

        case GET_PROFILE:{
            return  {...state, profile: action.profile}
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

export const getProfile = (profile) => {
    return {type: GET_PROFILE, profile}
}

export default profilePageReducer;