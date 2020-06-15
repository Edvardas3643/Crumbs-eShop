import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import Storefront from "../storefront/Storefront";

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

            <Route exact path="/shopfront">
                <Storefront tags={props.tags}/>
            </Route>

            <Redirect to="/home"/>
        </Switch>
);