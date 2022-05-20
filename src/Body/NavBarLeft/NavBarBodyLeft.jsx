import React, {useState} from "react";
import styles from './NavBodyLeft.module.css';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavBarBodyLeft = ({setProductExectFunction,props},) => {
    const [activeMenus, setActiveMenus] = useState([]);

    const handleMenuClick = (data) => {
        const setProductExectFunction248 = (data) => {
            setProductExectFunction(data)
        };
        setProductExectFunction248(data.label)
    }

    const handleArrowClick = (menuName) => {
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            let index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }
        setActiveMenus(newActiveMenus);
    };

    const ListMenu = ({ data, hasSubMenu, menuName, menuIndex}) => (
        <span>
            <div className={styles.listText}>
                <label    onClick={() => handleMenuClick(data)}>{data.label}</label>
                {hasSubMenu && (
                    <div className={styles.arrow}
                         onClick={() => handleArrowClick(menuName)}
                         toggle={activeMenus.includes(menuName)}
                    />
                ) }
            </div>
            {console.log(props)}

            <Link  to={'/products/' + activeMenus}>
                {hasSubMenu && (

                    <SubMenu
                    data={data.submenu}
                    toggle={activeMenus.includes(menuName)}
                    menuIndex={menuIndex}
                    />
            ) }</Link >

        </span>
    );
    const SubMenu = ({dept, data, toggle, menuIndex}) => {
        if (!toggle) {
            return null;
        }

        return (
            <ul>
                {data.map((menu, index) => {
                    const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.submenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={styles.blockList}>
            <ul>
                {props.label.map((menu, index) => {
                    const dept = 1;
                    const menuName = `sidebar-menu-${dept}-${index}`;
                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.submenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default NavBarBodyLeft;
