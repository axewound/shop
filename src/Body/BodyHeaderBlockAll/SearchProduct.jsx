import React from 'react';
import styles from "../ProductPages.module.css";


class SearchProduct extends React.Component {

    state = {
        products:this.props.products
    };

    handleChange1 = (e) => {
        const searchString = e.target.value
        this.props.handleChange2(searchString);
    }

    render() {


        return (
                <div className={styles.blockProducts}>

                    <div>
                        <input
                            type="text"
                            value={this.props.searchString}
                            ref="search"
                            onChange={this.handleChange1}
                            placeholder="type name heres"
                        />
                    </div>
                </div>
        );
    }
}


export default SearchProduct;



{/*

class SearchProduct extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            searchString: "s",

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

        this.setState({
            searchString: this.refs.search.value,
            users: this.props.products

        });
    }


    handleChange2 = (e) => {
        let value = e.target.value

        this.props.searchString(value)
    };
    newPostElement = React.createRef();



    render() {
        let users = this.props.products;
        console.log(users)

        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            users = users.filter(function (products) {
                return products.title.toLowerCase().match(search);
            });
        }
        console.log("render")

        return (
            <div>
                <h3>React - simple search</h3>
                <div>
                    <input
                        type="text"
                        value={this.state.searchString}
                        ref={this.newPostElement} onChange={this.handleChange}
                        placeholder="type name here"
                    />
                    <ul>
                        {users.map(l => {
                            return (
                                <li>
                                    {l.name} <a href="#">{l.email}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


export default SearchProduct;*/}
