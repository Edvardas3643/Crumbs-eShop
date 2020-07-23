import React, {useContext} from "react"
import "./Header.css"
import Cart from "../CartBtn/CartToggleBtn";
import NavigationToggleBtn from "../NavigationBtn/NavigationToggleBtn";
import SearchBtn from "../Search/SearchBtn";
import {NavLink} from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import {UserContext} from "../../App";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import {useTranslation} from "react-i18next";

export default () => {

    const {i18n} = useTranslation()

    const {userLoggedIn} = useContext(UserContext)

    console.log(i18n.language)

    const changeLanguage = () => e => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value)
    }

    return (
        <section className="background--main-light">
            <div className="header container-wide">
                <div className="flex header__left-side">
                    <NavigationToggleBtn/>
                    <select defaultValue={i18n.language} className="language-selector" onChange={changeLanguage()}>
                        <option  value="en">EN</option>
                        <option  value="lt">LT</option>
                    </select>
                </div>

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