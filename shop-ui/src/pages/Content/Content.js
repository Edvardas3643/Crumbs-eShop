import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Shopfront from "../Shopfront/Shopfront";
import Product from "../Product/Product";
import ProductForm from "../ProductForm/ProductForm";
import Login from "../Login/Login";
import Checkout from "../Checkout/Checkout";
import PaymentForm from "../PaymentInfo/PaymentInfoForm";
import UserProfile from "../UserProfile/UserProfile";
import Register from "../Register/Register";
import IsUserLoggedInReroute from "../../components/Security/IsUserLoggedInReroute"
import IsAdmin from "../../components/Security/IsAdminRerouter"

export default () => {

    return (
        <Switch>
            <Route exact path="/home">
                <Home/>
            </Route>

            <Route exact path="/paymentInfo">
                <IsUserLoggedInReroute>
                    <PaymentForm/>
                </IsUserLoggedInReroute>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/checkout">
                <Checkout/>
            </Route>

            <Route exact path="/login">
                <h1>Login</h1>
            </Route>

            <Route exact path="/contacts">
                <h1>Contacts</h1>
            </Route>

            <Route exact path="/about">
                <h1>About</h1>
            </Route>

            <Route path="/shopfront/:tag">
                <Shopfront/>
            </Route>

            <Route exact path="/product/:id">
                <Product/>
            </Route>

            <Route path="/newProduct">
                <IsAdmin>
                    <ProductForm/>
                </IsAdmin>
            </Route>

            <Route path="/profile">
                <IsUserLoggedInReroute>
                    <UserProfile/>
                </IsUserLoggedInReroute>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>

            <Redirect to="/home"/>
        </Switch>
    )
}