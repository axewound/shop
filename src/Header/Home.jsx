import React from 'react';
import style from "./HeaderTop.module.css"
import {Link, NavLink, withRouter} from "react-router-dom";
import SliderContainer from "../assets/SliderContainer";
import {connect} from "react-redux";
import {sliderId} from "../redux/product-reducer";
let slides = [
    {
        background: "https://picsum.photos/800/500?image=563",
        id: "0"
    },
    {
        background: "https://unsplash.it/800/500?image=580",
        id: "1"
    },
    {
        background: "https://unsplash.it/800/500?image=824",
        id: "2"
    },
    {
        background: "https://unsplash.it/800/500?image=580",
        id: "1"
    },
    {
        background: "https://unsplash.it/800/500?image=824",
        id: "2"
    },
]

class Home extends React.Component {
    render() {
        return (
            <div className={style.slider_box}>
               <SliderContainer slides={slides}/>
            </div>
        )
    }
}

/*let mapStateToProps = (state) => {
console.log(state)
    return {
        textnav: state.productPage.textnav,

    }
}*/

let WithContainer = withRouter(Home)
export default connect(null,  {sliderId})(WithContainer);


