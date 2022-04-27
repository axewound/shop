import React from 'react';
import {usersAPI} from "../api/api";

class Basket extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.basketProduct.map(item => {
                    return  <div key={item.id}><h5>{item.name}</h5>
                        <div ><h5>{item.quantity}</h5>
                        </div>
                        <button onClick={() => {
                            this.props.basketDelete(item.id)
                        }}>X
                        </button>
                        <button onClick={() => {

                            this.props.increaseQuantity(item.quantity, item.id)
                        }}>+
                        </button><button onClick={() => {

                            this.props.decreaseQuantity(item.quantity, item.id)
                        }}>-
                        </button>
                        {item.count}
                    </div>
                })}</div>
            </div>
        )
    }
}

export default Basket