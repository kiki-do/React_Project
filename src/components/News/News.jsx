import React from "react";
import s from './News.module.css'

const News = (props) => {
    return(
        <div className={s.news}>
            <div className={s.news__message}>{props.news__message}</div>
        </div>
    )
}

export default News;