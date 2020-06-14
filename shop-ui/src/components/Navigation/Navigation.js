import React from "react";
import './Navigation.css'
import '../../assets/img/navigation_background.PNG'

export default (props) => {

    let navigationClasses = "navigation-bar"

    if (props.show) {
        navigationClasses = "navigation-bar open"
    }

    return (
        <nav className={navigationClasses}>
            <div className="navigation-bar__close-btn-container">
                <i onClick={props.navigationClickHandler} className="navigation-bar__close-btn fas fa-times fa-2x"/>
            </div>
            <ul className="navigation-bar__main">
                <li>Shop By</li>
                <li>Cupcakes<i className="fas fa-arrow-right"/></li>
                <li>Cakes<i className="fas fa-arrow-right"/></li>
                <li>Brownies<i className="fas fa-arrow-right"/></li>
                <li>Cookies<i className="fas fa-arrow-right"/></li>
                <li>Visit Us<i className="fas fa-arrow-right"/></li>
            </ul>
            <ul className="navigation-bar__secondary">
                <li>Login/Register</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
        </nav>
    )
}