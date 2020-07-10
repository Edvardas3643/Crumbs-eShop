import React, {useContext} from "react"
import "./Header.css"
import Cart from "../CartBtn/CartToggleBtn";
import NavigationToggleBtn from "../NavigationBtn/NavigationToggleBtn";
import SearchBtn from "../Search/SearchBtn";
import {NavLink} from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import {UserContext} from "../../App";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

export default () => {

    const {userLoggedIn} = useContext(UserContext)

    return (
        <section className="background--main-light">
            <div className="header container-wide">
                <NavigationToggleBtn/>
                <NavLink to="/home">
                    <img
                        srcSet="https://cdn.shopify.com/s/files/1/0015/1185/0042/t/10/assets/logo.svg?v=2033538501994009811"
                        id="page-logo" alt=""
                    />
                </NavLink>
                <div className="flex header__right-side">
                    <SearchBtn/>
                    <LoginBtn/>
                    {
                        userLoggedIn() ? <LogoutBtn/> : <></>
                    }

                    <Cart/>
                </div>
            </div>
        </section>
    )
}