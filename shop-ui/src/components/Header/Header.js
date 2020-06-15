import React from "react"
import "./Header.css"
import Cart from "../Cart/CartToggleBtn";
import NavigationToggleBtn from "../Navigation/NavigationToggleBtn";
import SearchBtn from "../Search/SearchBtn";
import {NavLink} from "react-router-dom";

export default (props) => (
    <section className="background--main-light">
        <div className="header container-wide">
            <NavigationToggleBtn click={props.navigationClickHandler}/>
            <NavLink to="/home">
                <img
                    srcSet="https://cdn.shopify.com/s/files/1/0015/1185/0042/t/10/assets/logo.svg?v=2033538501994009811"
                    id="page-logo" alt=""
                />
            </NavLink>
            <div className="flex header__right-side">
                <SearchBtn click={props.searchClickHandler}/>
                <Cart click={props.cartClickHandler}/>
            </div>
        </div>
    </section>

)
