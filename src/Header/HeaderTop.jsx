import React from 'react';
import style from "./HeaderTop.module.css"
import Header_burger from '../assets/image/Header_burger.svg'
import Icon_Portland from '../assets/image/Icon_Portland.svg'
import Shopping_Cart_Icon from '../assets/image/Shopping_Cart_Icon.svg'
import {Link, NavLink} from "react-router-dom";
import Menu from "../Simple";
import Basket from "./Basket";

class HeaderTop extends React.Component {
    constructor() {
        super();
        this.state = {
            popupVisible: false
        };
    }

    handleClick = () => {
        if (!this.state.popupVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    render() {
        return (

            <div className={style.HeaderTopContainer}>
                <div className="popover-container" ref={node => {
                    this.node = node;
                }}>
                {this.state.popupVisible && (
                    <div>
                        <Basket basketProduct={this.props.basketProduct}
                                totalPrice={this.props.totalPrice}
                                basketDelete={this.props.basketDelete}
                                increaseQuantity={this.props.increaseQuantity}
                                decreaseQuantity={this.props.decreaseQuantity}/>
                    </div>
                )}
                </div>



                <div>
                    <Menu/>

                </div>
                <div>
                    <img className={style.Icon_Portland} src={Icon_Portland} alt=""/>
                </div>
                <nav>
                    <ul>
                        <NavLink to="/" className={style.NavLink}>Home</NavLink>
                        <NavLink to="/products" className={style.NavLink}>Devices</NavLink>
                        {/*   <Link to="/device" >About</Link>*/}
                        <li>Delivery & Payment</li>
                        <li>Guarantee</li>
                        <li>About Us</li>
                    </ul>
                </nav>

                <div className={style.basketHeader}>
                    <button
                        onClick={this.handleClick}
                    >
                        <img src={Shopping_Cart_Icon} alt=""/>
                        <div className={style.basketHeaderCount}>
                            <span>CART</span>
                            <div className={style.basketCount}>{this.props.basketProduct.length}</div>
                        </div>
                    </button>

                </div>
                <div>
                    <button className={style.buttonCart}>Sing in</button>
                </div>
            </div>
        )
    }
}

export default HeaderTop