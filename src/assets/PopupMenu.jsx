import React, {useState, useEffect, useRef} from "react"
import "./PopupMenu.css";
import Basket from "../Header/Basket";
import styles from "../Header/HeaderTop.module.css";
import Shopping_Cart_Icon from "./image/Shopping_Cart_Icon.svg";

const PopupMenu = ({props}) => {
    {
        console.log(props)
    }

    const [isShown, setIsShown] = useState(false)
    const popupRef = useRef()
    const documentClickHandler = useRef()

    useEffect(() => {
        documentClickHandler.current = e => {
            /*    console.log('documentClickHandler')*/

            if (popupRef.current.contains(e.target)) return

            setIsShown(false)
            removeDocumentClickHandler()
        }
    }, [])

    const removeDocumentClickHandler = () => {
        /*console.log('removeDocumentClickHandler')*/

        document.removeEventListener('click', documentClickHandler.current)
    }

    const handleToggleButtonClick = () => {
        /* console.log('handleToggleButtonClick')*/

        if (isShown) return

        setIsShown(true)
        document.addEventListener('click', documentClickHandler.current)
    }

    const handleCloseButtonClick = () => {
        console.log('handleCloseButtonClick')

        setIsShown(false)
        removeDocumentClickHandler()
    }

    return (
        <div className="popupMenuContainer">
            <span onClick={handleToggleButtonClick} className={styles.button_basket}>

                <img src={Shopping_Cart_Icon} alt=""/>
                <div className={styles.basketHeaderCount}>
                    <span>CART</span>
                    <div className={styles.basketCount}>{props.basketProduct.length}</div>
                </div>
                <div
                    className={`popup-menu ${isShown ? 'shown' : ''}`}

                    ref={popupRef}
                >


                    <Basket props={props} handleCloseButtonClick={handleCloseButtonClick} className={`popup-menu ${isShown ? 'shown' : ''}`}/>

                </div>
            </span>


        </div>
    )
}

export default PopupMenu
