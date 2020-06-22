import React from "react";
import './Navigation.css'
import '../../assets/img/navigation_background.PNG'
import {NavLink} from "react-router-dom";


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
                <li>
                    <NavLink to="/shopfront/muffins">Muffins<i className="fas fa-arrow-right"/></NavLink>
                </li>
                <li>
                    <NavLink to="/shopfront/cakes">Cakes<i className="fas fa-arrow-right"/></NavLink>
                </li>
                <li>
                    <NavLink to="/shopfront/kits">Baking Kits<i className="fas fa-arrow-right"/></NavLink>
                </li>
            </ul>
            <div className="navigation-bar__secondary">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/login">Login/Register</NavLink>
                <NavLink to="/contacts">Contact Us</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </div>
        </nav>
    )
}