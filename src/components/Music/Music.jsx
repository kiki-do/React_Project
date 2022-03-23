import React from "react";
import s from './Music.module.css'

const Music = (props) =>{
    return(
        <div className={s.music}>
            <div className={s.music__content}>Music</div>
        </div>
    )
}

export default Music;