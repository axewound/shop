import React from 'react';
import preloader from "./image/preloader.svg";
import style from "../assets/Preloader.module.css"

let Preloader = (props) => {
    return <div className={style.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader;