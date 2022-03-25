import React from 'react'
import Info from './Info/Info';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';

const Profile = (props) =>{
    return(
      <div className={s.content}><img className={s.image} src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}></img>
        <Info />
        <MyPost posts={props.state.posts} addPost={props.addPost} />
      </div>
    )
};

export default Profile; 