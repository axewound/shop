import React from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink, Route} from "react-router-dom";

const ProductPages = (props) => {
    return (
        <div className={styles.blockProducts}>
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


export default ProductPages;