import React from 'react';
import {connect} from "react-redux";
import NavCheckbox from "./NavCheckbox";
import {setCheckFunction} from "../../redux/product-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        setCheck: (che) => {
            dispatch(setCheckFunction(che));
        },
    }
}

const NavCheckboxContainer = connect(null,mapDispatchToProps)(NavCheckbox);

export default NavCheckboxContainer;