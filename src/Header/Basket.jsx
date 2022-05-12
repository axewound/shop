import React from 'react';
import style from './Basket.module.css';
import userPhoto from "../assets/image/user.png";

class Basket extends React.Component {
    render() {
        return (
            <div className={style.basket}>
                <span onClick={this.props.handleCloseButtonClick}>
                    X

                </span>
                <div>{this.props.props.basketProduct.map(item => {
                    return (
                        <div key={item.id} className={style.basket_one_product}><img
                            src={item.image != null ? item.image : userPhoto} alt="photo"/>
                            <h2>{item.name}</h2>
                            <div>
                                <span onClick={() => {
                                    this.props.props.basketDelete(item.id)
                                }}>X
                                </span>
                                <span onClick={() => {
                                    this.props.props.increaseQuantity(item.quantity, item.id, item.price,item.image)
                                }}>+
                                </span>
                                <span onClick={() => {
                                    this.props.props.decreaseQuantity(item.quantity, item.id, item.price,item.image)
                                }}>-
                                </span>
                            </div>
                            <div className={style.basket_info}>
                                <h5>{item.quantity}</h5>
                                <h4>{item.price}</h4>
                            </div>
                            {item.count}
                        </div>
                    )
                })}
                    Total Price : {this.props.props.totalPrice.toFixed(2)}
                </div>
            </div>
        )
    }
}

export default Basket