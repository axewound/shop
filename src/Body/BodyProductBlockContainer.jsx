import React from 'react';
import ProductPages from "./ProductPages";

class BodyProductBlockContainer extends React.Component {
    render() {
        return (
            <div>

                <ProductPages products={this.props.products}

                />
            </div>
        )
    }
}

export default BodyProductBlockContainer