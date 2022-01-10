import React from 'react';
import style from "./HeaderTop.module.css"
import Header_burger from '../assets/image/Header_burger.svg'
import Icon_Portland from '../assets/image/Icon_Portland.svg'
import Shopping_Cart_Icon from '../assets/image/Shopping_Cart_Icon.svg'
import {Link, NavLink} from "react-router-dom";
import Menu from "../Simple";

class HeaderTop extends React.Component {
    render() {
        return (
            <div className={style.HeaderTopContainer}>
                <div>
                    <Menu/>

                </div>
                <div>
                    <img src={Icon_Portland} alt=""/>
                </div>
                <nav>
                    <ul>
                        <Link to="/home" >Home</Link>
                        <Link to="/devices" >Devices</Link>
                     {/*   <Link to="/device" >About</Link>*/}
                        <li>Delivery & Payment</li>
                        <li>Guarantee</li>
                        <li>About Us</li>
                    </ul>
                </nav>
                <div>
                    <img src={Shopping_Cart_Icon} alt=""/>
                    <div>
                        <span>CART</span>
                        <div>{this.props.basketProduct.length}</div>
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