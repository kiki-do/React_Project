import React from "react";
import Post from "../../Post/Post";
import s from './MyPost'
import {addPostActionCreator, updatePostTextCreator} from '../../../redux/state.js' 

const MyPost = (props) =>{
    
    let postsElement = props.state.posts.map(d => <Post message={d.message}/>);
    let newPostElement = props.state.newPostText;


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostText = (e) =>{
      let text = e.target.value;
      props.dispatch(updatePostTextCreator(text));
    }
    
    return(
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <textarea onChange={newPostText}  placeholder='your posts...' value={newPostElement}/> 
            </div>
            <div className={s.button}>
              <button onClick={addPost}>Send</button>
            </div>
            {postsElement}
        </div>
    )
}   

export default MyPost;