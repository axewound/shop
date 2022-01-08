import React, {useState} from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink, Route} from "react-router-dom";

class ProductPages extends React.Component {

    state = {
        searchString: "",
        products: this.props.products
    };

    handleChange1 = (e) => {
        const searchString = e.target.value

        this.setState({
            searchString: this.refs.search.value
        });
    }

    render() {
        console.log(this.props)
        let _users = this.props.products;
        let search = this.props.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function (user) {
                return user.title.toLowerCase().match(search);
            });
        }

        return (
            <div className={styles.blockProducts}>
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