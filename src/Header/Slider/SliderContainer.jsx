import React from 'react';
import {connect} from "react-redux";
import {sliderId} from "../../redux/product-reducer";
import Slider from "./sliderIndex";


const mapDispatchToProps = (dispatch) => {
    return {
        sliderIdCont: (id) => {
            dispatch(sliderId(id));
        },
    }
}

const SliderContainer = connect(null,mapDispatchToProps)(Slider);

export default SliderContainer;