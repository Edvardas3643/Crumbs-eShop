import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Shopfront from "../Shopfront/Shopfront";

export default (props) => (
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

            <Route path="/shopfront/:tag" component={Shopfront}/>

            <Redirect to="/home"/>
        </Switch>
);