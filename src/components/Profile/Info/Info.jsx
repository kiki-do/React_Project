import React from "react";
import s from './Info.module.css'

const Info = (props) => {
  
  
    return(
        <div className={s.profile}>
          <div><img className={s.avatar} src={props.profile.photos.large} alt="" ></img></div>
          <div className={s.info}>
            <div className='name'><span>Name</span>: {props.profile.fullName}</div>
            <div className='date__birth'><span>About me:</span>: {props.profile.aboutMe}</div>
            <div className='Education'><span>Job</span>: {props.profile.lookingForAJobDescription}</div>
            <div className='website'><span>Website</span>: <a href={props.profile.contacts.website}>#</a></div>
          </div>
        </div>
    )
};

export default Info;

// src="https://vjoy.cc/wp-content/uploads/2020/10/0ca9e28dcb12dc698cfd2beda6d6fa64-youtube.jpg"