import React from "react";
import {lightModeImg, darkModeImg} from '../../assets/images'

function Header (props) {

    return(
        <header className={`header--wrapper ${props.darkMode ? 'dark': ""}`}>
            <div className="container header">
                <div className={`header__name ${props.darkMode ? 'dark': ""}`}>Where in the world?</div>
                <div className="header__toggle--darkMode" onClick={props.toggleDarkMode}>
                    {props.darkMode ? darkModeImg : lightModeImg}
                    <small className={`header__toggle--darkMode__text ${props.darkMode ? 'dark': ""}`}>Dark Mode</small>
                </div>
            </div>
        </header>
    )
}

export default Header