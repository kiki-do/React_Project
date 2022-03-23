import React from "react";
import s from './Info.module.css'

const Info = (props) => {
    return(
        <div className={s.profile}>
          <div><img className={s.avatar} src={props.url} alt="" ></img></div>
          <div className={s.info}>
            <div className='name'>Name: {props.name}</div>
            <div className='date__birth'>Date Birth: {props.birth}</div>
            <div className='Education'>Education: {props.education}</div>
            <div className='website'>Website: <a href={props.website}>{props.website}</a></div>
          </div>
        </div>
    )
};

export default Info;