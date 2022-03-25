import React from "react";
import s from './Info.module.css'

const Info = (props) => {
  
  
    return(
        <div className={s.profile}>
          <div><img className={s.avatar} src="https://vjoy.cc/wp-content/uploads/2020/10/0ca9e28dcb12dc698cfd2beda6d6fa64-youtube.jpg" alt="" ></img></div>
          <div className={s.info}>
            <div className='name'><span>Name</span>: Antipov D.</div>
            <div className='date__birth'><span>Date Birth</span>: 27.05.2002</div>
            <div className='Education'><span>Education</span>: GUAP</div>
            <div className='website'><span>Website</span>: <a href='#'>#</a></div>
          </div>
        </div>
    )
};

export default Info;