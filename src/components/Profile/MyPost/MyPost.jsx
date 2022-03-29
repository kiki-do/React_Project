import React from "react";
import Post from "../../Post/Post";
import s from './MyPost'
import {addPostActionCreator, updatePostTextCreator} from '../../../redux/state.js'


const MyPost = (props) =>{
    
    let postsElement = props.posts.map(d => <Post message={d.message}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostText = () =>{
      let text = newPostElement.current.value;
      props.dispatch(updatePostTextCreator(text));
    }
    
    return(
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <textarea onChange={newPostText} ref={newPostElement}  placeholder='your posts...' value={props.newPostText}/> 
            </div>
            <div className={s.button}>
              <button onClick={addPost}>Send</button>
            </div>
            {postsElement}
        </div>
    )
}   

export default MyPost;