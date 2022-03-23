import React from 'react'
import Info from './Info/Info';
import Post from '../Post/Post';
import s from './Profile.module.css'

const Profile = () =>{
    return(
      <div className={s.content}><img className={s.image} src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}></img>
        <Info url='https://s.pfst.net/2017.06/573306167567f93a12ad221c811e4a01e0473f4a6f7e_b.jpg'
        name = 'Antipov.D' birth = "27.05.02" education = "GUAP" website = "#" />
        <div className= {s.posts}>
            <div className={s.item}>My Posts</div>
            <div className={s.item}>
              <label><input placeholder='your posts...' type="text" /></label>
            </div>
            <div className={s.button}>
              <button>Send</button>
            </div>
            <Post message='Are you gay?'/>
            <Post message='Fuck you? '/>
          </div>
      </div>
    )
};

export default Profile;