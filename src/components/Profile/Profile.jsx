import React from 'react'
import Info from './Info/Info';
import Post from '../Post/Post';
import s from './Profile.module.css'

const Profile = (props) =>{

  let postsElement = props.state.posts.map(d => <Post message={d.message}/>);
  let profilesElement = props.state.profiles.map(d => <Info url={d.url} name={d.name} birth={d.birth} education={d.education} website={d.website} />);

    return(
      <div className={s.content}><img className={s.image} src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}></img>
        {profilesElement}
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <label><input placeholder='your posts...' type="text" /></label>
            </div>
            <div className={s.button}>
              <button>Send</button>
            </div>
            {postsElement}
          </div>
      </div>
    )
};

export default Profile;