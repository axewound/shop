import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyProductBlockContainer from "./BodyProductBlockContainer";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {usersAPI} from "../api/api";
import {connect} from "react-redux";
import {ratingAC, setProduct, toggleIsFetching} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import ProductOnePages from "./ProductOnePage";
import {Route} from "react-router-dom";


class Body extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers()
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setProduct(data);
            });
    }

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };
    onKeyUp = e => {
        console.log(e)
        // filter post list by title using onKeyUp function
        const post = this.props.products.filter(item =>
/*
            item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
*/
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.setState({ post });
    };
    render() {
        return (
            <div>
                <BodyHeaderBlockContainer handleChange={this.handleChange} onKeyUp={this.onKeyUp} products={this.props.products}/>

                <div className={styles.bodyContainer}>
                    <NavBarBodyLeft/>

                    {this.props.isFetching ? <Preloader/> : null}
                    <Route path='/product/:userId?'
                           render={ () => <ProductOnePages /> }/>
                    <Route path='/body'
                           render={ () => <BodyProductBlockContainer products={this.props.products} /> }/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching
    }
}


export default connect(mapStateToProps, {valueElment: ratingAC, setProduct, toggleIsFetching})(Body);