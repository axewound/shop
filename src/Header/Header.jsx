import React from 'react';
import HeaderTop from "./HeaderTop";
import HeaderAfterTop from "./HeaderAfterTop";
import HeaderSlider from "./HeaderSlider";
import style from "./Header.module.css"
class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderTop/>
                <HeaderAfterTop/>
                <HeaderSlider/>
            </div>
        )
    }
}
export default Header