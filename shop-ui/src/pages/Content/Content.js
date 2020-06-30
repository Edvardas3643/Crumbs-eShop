import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Shopfront from "../Shopfront/Shopfront";
import Product from "../Product/Product";
import ProductForm from "../ProductForm/ProductForm";

export default () => (
    <Switch>
        <Route exact path="/home" component={Home}/>

        <Route exact path="/cart">
            <h1>Cart</h1>
        </Route>

        <Route exact path="/checkout">
            <h1>Checkout</h1>
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

        <Route path="/shopfront/:tag" component={Shopfront}/>

        <Route exact path="/product/:id" > <Product /> </Route>

        <Route path="/productForm" component={ProductForm}/>

        <Redirect to="/home"/>
    </Switch>
);