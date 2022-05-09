import React from 'react';
import {connect} from "react-redux";
import Slider from "./Slider";
import {sliderId} from "../redux/product-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        sliderIdCont: (id) => {
            dispatch(sliderId(id));
        },
    }
}

const SliderContainer = connect(null,mapDispatchToProps)(Slider);

export default SliderContainer;