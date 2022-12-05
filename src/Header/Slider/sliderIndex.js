import React from "react";

import Slider from "./slider";

function Slider248(props) {
   /* this.props.sliderIdCont(this.state.activeSlide)*/
    console.log(props)
    return (
        <>
            <Slider height="300px" auto speed={3000} props={props}>
                <div style={{ width: "100%", height: "300px", background: "red" }}>
                </div>
                <div style={{ width: "100%", height: "300px", background: "beige" }}>
                </div>
                <div style={{ width: "100%", height: "300px", background: "skyblue" }}>
                </div>
                <div style={{ width: "100%", height: "300px", background: "yellow" }}>
                </div>
                <div style={{ width: "100%", height: "300px", background: "white" }}>
                </div>

            </Slider>
        </>
    );
}

export default Slider248
