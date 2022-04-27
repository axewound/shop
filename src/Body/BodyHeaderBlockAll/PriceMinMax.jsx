
import React from 'react';
import styles from "../ProductPages.module.css";


class PriceMinMax extends React.Component {


    state = {
        price: {
            min: "",
            max: "",
        }


    };

    handleInputChange = (event) => {
        const target = event.target;
        const {value, name} = target;

        this.props.handleChange23(
        {name,value}
        )
        this.setState({
            price: {
                [name]: target.value
            }
        });
    }

    render() {
        return (
            <form>
                <label>
                    <input
                        name="min"
                        type="text"
                        value={this.state.price.min}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    <input
                        name="max"
                        type="text"
                        value={this.state.price.max}
                        onChange={this.handleInputChange}/>
                </label>
                <hr/>
                <div>
                    {this.state.price.min} <br/>
                    {this.state.price.max}
                </div>
            </form>
        );
    }
}

export default PriceMinMax;

