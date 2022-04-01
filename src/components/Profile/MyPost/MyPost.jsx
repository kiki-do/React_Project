import React from "react";
import Post from "../../Post/Post";
import s from './MyPost'

const MyPost = (props) =>{
    
    let postsElement = props.posts.map(d => <Post message={d.message}/>);
    let newPostElement = props.newPostText; 


    let addPost = () => {
        props.addPost();
    }

    let newPostText = (e) =>{
      let text = e.target.value
      props.onPostChange(text);
    }
    
    return(
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <textarea onChange={newPostText}  placeholder='your posts...' value={newPostElement} /> 
            </div>
            <div className={s.button}>
              <button onClick={addPost}>Send</button>
            </div>
            {postsElement}
        </div>
    )
}   

export default MyPost;