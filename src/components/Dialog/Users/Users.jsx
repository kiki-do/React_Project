import React from "react";
import s from './Users.module.css';
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let path = '/dialog/' + props.id;
    return(
        <div className={s.username}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Users;