import React from 'react';
import style from "./HeaderTop.module.css"
import Header_burger from '../assets/image/Header_burger.svg'
import Icon_Portland from '../assets/image/Icon_Portland.svg'
import Shopping_Cart_Icon from '../assets/image/Shopping_Cart_Icon.svg'
import {Link, NavLink} from "react-router-dom";
import Slider from "../assets/Slider";
import MenuLinks from "../Simple";
import Menu from "../Simple";
let slides = [
    {
        background: "https://picsum.photos/800/500?image=563",
        text: "Road"
    },
    {
        background: "https://unsplash.it/800/500?image=580",
        text: "America"
    },
    {
        background: "https://unsplash.it/800/500?image=824",
        text: "Pieapple"
    }
];

class Home extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
               <Slider slides={slides}/>
            </div>
        )
    }
}

export default Home