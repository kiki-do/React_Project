import React from "react";
import s from './Info.module.css'

const Info = (props) => {
    return(
        <div className={s.profile}>
          <div><img className={s.avatar} src={props.url} alt="" ></img></div>
          <div className={s.info}>
            <div className='name'><span>Name</span>: {props.name}</div>
            <div className='date__birth'><span>Date Birth</span>: {props.birth}</div>
            <div className='Education'><span>Education</span>: {props.education}</div>
            <div className='website'><span>Website</span>: <a href={props.website}>{props.website}</a></div>
          </div>
        </div>
    )
};

export default Info;