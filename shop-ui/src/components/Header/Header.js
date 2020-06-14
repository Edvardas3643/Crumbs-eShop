import React from "react"
import "./Header.css"
import Cart from "../Cart/CartToggleBtn";
import NavigationToggleBtn from "../Navigation/NavigationToggleBtn";

export default (props) => (
    <section className="background--main-light">
        <div className="header">
            <NavigationToggleBtn click={props.navigationClickHandler}/>
            <img
                srcSet="https://cdn.shopify.com/s/files/1/0015/1185/0042/t/10/assets/logo.svg?v=2033538501994009811"
                id="page-logo" alt=""/>
            <Cart click={props.cartClickHandler}/>
        </div>
    </section>

)
