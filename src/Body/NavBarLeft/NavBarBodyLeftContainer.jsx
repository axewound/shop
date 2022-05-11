import React from 'react';
import {connect} from "react-redux";
import NavBarBodyLeft from "./NavBarBodyLeft";
import {setProductExect} from "../../redux/label-reducer";



const mapDispatchToProps = (dispatch) => {
    return {
        setProductExectFunction: (label) => {
            dispatch(setProductExect(label));
        },
    }
}

const NavBarBodyLeftContainer = connect(null,mapDispatchToProps)(NavBarBodyLeft);

export default NavBarBodyLeftContainer;