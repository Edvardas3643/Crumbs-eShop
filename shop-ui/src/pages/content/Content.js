import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../home/Home";

export default () => (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>

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

            <Route exact path="/shopfront">
                <h1>Shopfront</h1>
            </Route>

            <Redirect to="/home"/>
        </Switch>
);