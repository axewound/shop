import React from 'react';

class Basket extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.basketProduct.map(item => {
                    return  <div key={item.id}><h5>{item.title}</h5>
                        <button onClick={() => {
                            this.props.basketDelete(item.id)
                        }}>X
                        </button>
                        {item.count}
                    </div>
                })}</div>
            </div>
        )
    }
}

export default Basket