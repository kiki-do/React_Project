import React from "react";
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return(
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" alt="" />
            <div className={s.login__block}>
                {props.isAuth ? props.login
                : <NavLink to= {'/login'}><a>Login</a></NavLink>}
            </div>
        </header>


    );
}

export default Header;