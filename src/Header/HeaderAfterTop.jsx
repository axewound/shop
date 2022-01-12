import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HeaderTop.module.css";

class HeaderAfterTop extends React.Component {
    render() {
        return (
            <div>
                <hr className={style.hr}/>
                <nav className={style.headerAfterNav}>
                    <ul>
                        <li>Top Sales</li>
                        <li>Brand Focus</li>
                        <li>Hi-tech</li>
                        <li>Best Sellers</li>
                        <li>Projects</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default HeaderAfterTop