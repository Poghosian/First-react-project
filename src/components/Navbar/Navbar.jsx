import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeclassname={s.active}>Profile</NavLink>
             </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeclassname={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div> 
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settongs</a>
            </div>

        </nav>
    )
}

export default Navbar;