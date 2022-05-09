import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HeaderTop.module.css";
import styles from "../Body/ProductPages.module.css";
import FilterSearchContainerTop from "./FilterSearchContainerTop";


class HeaderAfterTop extends React.Component {

    render() {
        return (

            <div>
                <div className={style.navHeaderTop}>
                    <hr className={style.hr}/>

                    {
                        this.props.textnav.map(u =>
                            <nav className={style.headerAfterNav}>
                                <ul>
                                    {((u.id === this.props.textId) ?
                                        <li key={u.id} className={styles.active}>{u.name}</li>
                                        :
                                        <li key={u.id}>{u.name}</li>)}

                                </ul>
                            </nav>
                        )}
                    <hr className={style.hr}/>
                </div>
                <FilterSearchContainerTop products={this.props.products}
                product={this.props.product}
                filteredGoods={this.props.filteredGoods}
                searchString={this.props.searchString}/>
            </div>

        )
    }

}


export default HeaderAfterTop