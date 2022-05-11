import React from 'react';
import preloader from "./image/preloader.svg";
import style from "../assets/Preloader.module.css"

let Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloader} alt="x" />
    </div>
}

export default Preloader;