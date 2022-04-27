import React from 'react';
import styles from "../ProductPages.module.css";
import { useState } from "react";

function PriceMinMax () {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    function calculateTotal(props) {
        setTotal(number1 + number2);
    }

        return (
            <div>

                <input
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(+e.target.value)}
                    placeholder="0"
                />
                <input
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(+e.target.value)}
                    placeholder="0"
                />
                <button onClick={calculateTotal}>Add Them!</button>

                <h2>{total}</h2>

      {/*      <form>
                <label>
                    <input
                        name="min"
                        type="text"
                        value={props.state.price.min}
                        onChange={props.handleInputChange}/>
                </label>
                <label>
                    <input
                        name="max"
                        type="text"
                        value={props.state.price.max}
                        onChange={props.handleInputChange}/>
                </label>
                <hr/>
                <div>
                    {props.state.price.min} <br/>
                    {props.state.price.max}
                </div>
            </form>*/}
            </div>

        );

}

export default PriceMinMax;

/*
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

*/
