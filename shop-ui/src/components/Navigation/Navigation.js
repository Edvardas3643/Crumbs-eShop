import React, {useContext} from "react";
import './Navigation.css'
import {NavLink} from "react-router-dom";
import {AppContext} from "../../App";


export default () => {

    const {navigationBlock, navigationBlockHandler} = useContext(AppContext)

    return (
        <nav className={navigationBlock ? "navigation-bar open" : "navigation-bar"}>
            <div className="navigation-bar__close-btn-container">
                <i onClick={navigationBlockHandler} className="navigation-bar__close-btn fas fa-times fa-2x"/>
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