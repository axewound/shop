import React from 'react';
import style from "./HeaderTop.module.css"
import Header_burger from '../assets/image/Header_burger.svg'
import Icon_Portland from '../assets/image/Icon_Portland.svg'
import Shopping_Cart_Icon from '../assets/image/Shopping_Cart_Icon.svg'
import {Link, NavLink} from "react-router-dom";

class HeaderTop extends React.Component {
    render() {
        return (
            <div className={style.HeaderTopContainer}>
                <div>
                    <img src={Header_burger} alt=""/>
                </div>
                <div>
                    <img src={Icon_Portland} alt=""/>
                </div>
                <nav>
                    <ul>
                        <Link to="/home" activeClassName={style.activeLink}>Home</Link>
                        <Link to="/body" activeClassName={style.activeLink}>Devices</Link>
                        <Link to="/" activeClassName={style.activeLink}>About</Link>
                        <li>Delivery & Payment</li>
                        <li>Guarantee</li>
                        <li>About Us</li>
                    </ul>
                </nav>
                <div>
                    <img src={Shopping_Cart_Icon} alt=""/>
                    <div>
                        <span>CART</span>
                        <div>0</div>
                    </div>
                </div>
                <div>
                    <button className={style.buttonCart}>Sing in</button>
                </div>
            </div>
        )
    }
}

export default HeaderTop