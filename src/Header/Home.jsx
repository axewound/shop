import React from 'react';
import style from "./HeaderTop.module.css"
import {withRouter} from "react-router-dom";
import SliderContainer from "./Slider/SliderContainer";
import {connect} from "react-redux";
import {sliderId} from "../redux/product-reducer";
import Slider248 from "./Slider/sliderIndex";
import Slider from "./Slider/slider";

class Home extends React.Component {
    render() {
        return (
            <div className={style.slider_box}>
          {/*     <SliderContainer  slides={this.props.slides}/>*/}
                <SliderContainer slides={this.props.slides}/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        slides: state.sliderPage.slides,
    }
}

let WithContainer = withRouter(Home)
export default connect(mapStateToProps,  {sliderId})(WithContainer);


