const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';




const profilePageReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:  
            let newPost = {
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = ' ';  
            return state;


        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        
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