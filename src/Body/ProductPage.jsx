import React from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink} from "react-router-dom";

class ProductPages extends React.Component {
    state = {
        currentPage: 1,
    };

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        let _users = this.props.products;
        let search = this.props.searchString.trim().toLowerCase();
        if (search.length > 0) {
            _users = _users.filter(function (user) {
                return user.title.toLowerCase().match(search);
            });
        }

        const indexOfLastTodo = this.state.currentPage * this.props.todosPerPage;
        console.log(indexOfLastTodo)

        const indexOfFirstTodo = indexOfLastTodo - this.props.todosPerPage;
        const currentTodos = _users.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(_users.length / this.props.todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {

            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}>
                    {number}
                </li>
            );
        });

        return (
            <div>
                <div className={styles.blockProducts}>
                    {currentTodos.map(u => <div className={styles.productInfo} key={u.id}>
                        <NavLink to={'/product/' + u.id}>
                            <div>
                                <img src={u.image != null ? u.image : userPhoto} className={styles.productPhoto}/>
                            </div>
                        </NavLink>
                        <div className={styles.productInfoMin}>
                            <h2 className={styles.title}>{u.title}</h2>
                            <h3 className={styles.rating}>{u.rating.rate}</h3>
                            <span className={styles.price}>$ {u.price}</span>
                            <button onClick={() => {
                                this.props.basket(u.id, u.title, u.price, u.image)
                            }}>Add Case
                            </button>
                        </div>
                    </div>)
                    }
                </div>
                <div>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProductPages