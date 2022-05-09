import React, { useState, useRef, useEffect } from 'react';



const FilterSearch = (props) => {
    const list = props.filteredGoods
/*    const list = [
        { id: 1, name: 'Tom', type: 'Cat' },
        { id: 2, name: 'Zeus', type: 'Labrador' },
        { id: 3, name: 'Jax', type: 'Malamute' },
        { id: 4, name: 'Seb', type: 'Developer' },
        { id: 5, name: 'MacBook', type: 'Notebook' },
    ];*/
    console.log(props)
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
        setSearchValue(item.name);
        setSelectedItem(item.id);
        setVisible(false);
    };


    return (
        <div className="container">
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
            <div ref={dropdownRef} className={`dropdown ${visible ? 'v' : ''}`}>
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
                                key={x.id}
                                onClick={() => selectItem(x)}
                                className="dropdown_item"
                            >
                                <div className="item_text1">{x.title}</div>
                                <div className="item_text2">{x.type}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
export const searchFilter = ( searchValue, list, searchBy = 'title') => {
    let lowerCaseQuery = searchValue.toLowerCase();
    let filteredList = searchValue
        ? list.filter(x => x[searchBy].toLowerCase().includes(lowerCaseQuery))
        : list;
    return filteredList;
};


export default FilterSearch;