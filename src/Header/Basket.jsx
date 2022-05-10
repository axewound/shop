import React from 'react';
import style from './Basket.module.css';
import userPhoto from "../assets/image/user.png";

class Basket extends React.Component {

    render() {
        return (
            <div className={style.basket}>
                <div>{this.props.basketProduct.map(item => {
                    return (
                        <div key={item.id} className={style.basket_one_product}><img
                            src={item.image != null ? item.image : userPhoto}/>

                            <h2>{item.name}</h2>
                            <div>
                                <button onClick={() => {
                                    this.props.basketDelete(item.id)
                                }}>X
                                </button>
                                <button onClick={() => {

                                    this.props.increaseQuantity(item.quantity, item.id, item.price,item.image)
                                }}>+
                                </button>
                                <button onClick={() => {
console.log(this.props.decreaseQuantity)
                                    this.props.decreaseQuantity(item.quantity, item.id, item.price,item.image)
                                }}>-
                                </button>
                            </div>
                            <div className={style.basket_info}>
                                <h5>{item.quantity}</h5>
                                <h4>{item.price}</h4>
                            </div>

                            {item.count}

                        </div>
                    )
                })}
                    Total Price : {this.props.totalPrice.toFixed(2)}

                </div>

            </div>
        )
    }

}

export default Basket