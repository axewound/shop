import React, {useState} from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink, Route} from "react-router-dom";

class ProductPages extends React.Component {

    state = {
        searchString: "",
        products:this.props.products
    };


/*    componentDidMount() {
        this.setState({
            products:this.props.products
        });
        this.refs.search.focus();
    }*/

    handleChange1 = (e) => {
       const searchString = e.target.value

      /*  this.props.handleChange2(searchString);*/
        this.setState({
            searchString: this.refs.search.value
        });
    }
    /*handleChange = () => {
        this.setState({
            searchString: this.refs.search.value
        });
    }*/

    render() {
    /*    console.log(this)*/
        let _users = this.props.products;
      /*  console.log(this.props)*/
        let search = this.props.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function(user) {
                return user.title.toLowerCase().match(search);
            });
        }

        return (

            <div className={styles.blockProducts}>
{/*
                {console.log(this)}
*/}
           {/*     <div>
                    <input
                        type="text"
                        value={this.props.searchString}
                        ref="search"
                        onChange={this.handleChange1}
                        placeholder="type name here"
                    />
                </div>*/}
                    {
                        _users.map(u => <div className={styles.productInfo} key={u.id}>
                            <NavLink to={'/product/' + u.id}>
                                <div>
                                    <img src={u.image != null ? u.image : userPhoto} className={styles.productPhoto}/>
                                </div>
                            </NavLink>

                            <div className={styles.productInfoMin}>
                                <h2 className={styles.title}>{u.title}</h2>
                                <h3 className={styles.rating}>{u.rating.rate}</h3>
                                <span className={styles.price}>$ {u.price}</span>
                            </div>
                        </div>)
                    }

                </div>
        );
    }
}

export default ProductPages


/*

const ProductPages = (props) => {
    let finds = React.createRef();
    const findProduct1 = () => {
        let searchString = finds.current.value
        console.log(props)
        props.findProduct(searchString);
    }
    return (

        <div className={styles.blockProducts}>
            <div>
                <input type="text" ref={finds}/>
                <button onClick={findProduct1}>+</button>
            </div>
            {
                props.products.map(u => <div className={styles.productInfo} key={u.id}>
                    <NavLink to={'/product/' + u.id}>
                        <div>
                            <img src={u.image != null ? u.image : userPhoto} className={styles.productPhoto}/>
                        </div>
                    </NavLink>

                    <div className={styles.productInfoMin}>
                        <h2 className={styles.title}>{u.title}</h2>
                        <h3 className={styles.rating}>{u.rating.rate}</h3>
                        <span className={styles.price}>$ {u.price}</span>
                    </div>
                </div>)
            }
        </div>
    )
}


export default ProductPages;*/
