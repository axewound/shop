import React from 'react';

class Basket extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.basketProduct.map(item => {
                    /*по принцыпу так как описанно в
                    <button onClick={() => {
                        this.props.basket(u.id,u.title)
                    }}>Add Case</button>
                    повторить только для удаления*/
                    return <div><h5>{item.title}</h5>
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