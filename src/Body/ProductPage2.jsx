import React from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink} from "react-router-dom";

let ProductPages2 = (props) => {

    /*    let _users = this.props.products;
        let search = this.props.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function (user) {
                return user.title.toLowerCase().match(search);
            });
        }
        const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage;
        const currentTodos = _users.slice(indexOfFirstTodo, indexOfLastTodo);

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.props.products.length / this.state.todosPerPage); i++) {
            pageNumbers.push(i);
        }


        const renderPageNumbers = pageNumbers.map(number => {

            return (

                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });*/


    return (

        <div className={styles.blockProducts}>

            {console.log(props)}


            {
                props.products.map(u => <div className={styles.productInfo} key={u.id}>


                    <NavLink to={'/products/' + u.id}>
                        <div>
                            <img src={u.image != null ? u.image : userPhoto} className={styles.productPhoto}/>
                        </div>
                    </NavLink>

                    <div className={styles.productInfoMin}>
                        <h2 className={styles.title}>{u.title}</h2>
                        <h3 className={styles.rating}>{u.rating.rate}</h3>
                        <span className={styles.price}>$ {u.price}</span>
                        <button onClick={() => {
                            props.basket(u.id, u.title)
                        }}>Add Case
                        </button>
                    </div>

                </div>)
            }

        {/*    <ul id="page-numbers">
                {renderPageNumbers}
            </ul>*/}
        </div>
    );
}

export default ProductPages2
