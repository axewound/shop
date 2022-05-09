import React, { useState, useRef, useEffect } from 'react';
import style from "./HeaderTop.module.css"



const FilterSearch = (props) => {
    const list = props.uniqueArr

    const [visible, setVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {

        document.addEventListener('mousedown', handleClick, false);
        return () => document.removeEventListener('mousedown', handleClick, false);
    }, []);

    const handleClick = e => {



        if (dropdownRef.current.contains(e.target)) {
            return;
        }
        setVisible(false);
    };

    const handleChange = e => {

        setSearchValue(e.target.value);
        if (!visible) {
            setVisible(true);
        }

    };

    const selectItem = item => {
        setSearchValue(item);
        setVisible(false);
    };



    return (
        <div >
            <div tabIndex="0" className="input_container">
                <input
                    className="input"
                    type="text"
                    placeholder="Search Text"
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={() => {
                        // if (searchValue) {
                        setVisible(true);
                        // };
                    }}
                />
            </div>
            <div ref={dropdownRef} className={style.dropdown  }>
                {visible && (
                    <ul>
                        {!list && (
                            <li key="zxc" className="dropdown_item">
                                no result
                            </li>
                        )}
                        {list &&
                        searchFilter(searchValue, list).map(x => (

                            <li
                                key={x+1}
                                onClick={() => selectItem(x)}
                                className={style.dropdown_item}
                            >

                                <div className={style.item_text1}>{x}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
export const searchFilter = ( searchValue, list) => {
    let lowerCaseQuery = searchValue.toLowerCase();
    let filteredList = searchValue
        ? list.filter(x => x.toLowerCase().includes(lowerCaseQuery))
        : list;
    console.log(filteredList)

    return filteredList;
};


export default FilterSearch;