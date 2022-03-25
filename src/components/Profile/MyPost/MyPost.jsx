import React from "react";
import Post from "../../Post/Post";
import s from './MyPost'


const MyPost = (props) =>{
    let postsElement = props.posts.map(d => <Post message={d.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    
    return(
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <textarea ref={newPostElement}  placeholder='your posts...' type="text" /> 
            </div>
            <div className={s.button}>
              <button onClick={addPost}>Send</button>
            </div>
            {postsElement}
        </div>
    )
}   

export default MyPost;