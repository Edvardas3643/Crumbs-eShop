import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Shopfront from "../Shopfront/Shopfront";
import Product from "../Product/Product";
import ProductForm from "../ProductForm/ProductForm";
import Login from "../Login/Login";
import Checkout from "../Checkout/Checkout";
import PaymentForm from "../Payment/PaymentForm";

export default () => (
    <Switch>
        <Route exact path="/home">
            <Home/>
        </Route>

        <Route exact path="/payment">
            <PaymentForm/>
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

        <Route path="/productForm">
            <ProductForm/>
        </Route>

        <Redirect to="/home"/>
    </Switch>
);