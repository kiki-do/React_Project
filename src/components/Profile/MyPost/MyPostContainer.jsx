import MyPost from "./MyPost";
import {addPostActionCreator, updatePostTextCreator} from '../../../redux/profilePageReducer'
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilesPage.posts,
        newPostText: state.profilesPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () =>{
            dispatch(addPostActionCreator())
        },

        onPostChange: (text) =>{
            let action = updatePostTextCreator(text);
            dispatch(action);
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;