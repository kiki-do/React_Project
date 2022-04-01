import React from "react";
import s from './Man.module.css'

const Man = (props) => {
    return(
        <div>
            <div className={s.name}>{props.name}</div>
            <div className={s.decription}>{props.message}</div>
            <div className={s.country}>{props.country}</div>
        </div>
    )
}

export default Man;