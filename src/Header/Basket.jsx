import React from 'react';
import {usersAPI} from "../api/api";

class Basket extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.basketProduct.map(item => {
                    return <div key={item.id}><h5>{item.name}</h5>
                        <div><h5>{item.quantity}</h5>
                            <h4>{item.price}</h4>
                        </div>
                        <button onClick={() => {
                            this.props.basketDelete(item.id)
                        }}>X
                        </button>
                        <button onClick={() => {

                            this.props.increaseQuantity(item.quantity, item.id, item.price)
                        }}>+
                        </button>
                        <button onClick={() => {

                            this.props.decreaseQuantity(item.quantity, item.id, item.price)
                        }}>-
                        </button>
                        {item.count}

                    </div>
                })}
                    Total Price : {this.props.totalPrice.toFixed(2)}

                </div>

            </div>
        )
    }

}

export default Basket