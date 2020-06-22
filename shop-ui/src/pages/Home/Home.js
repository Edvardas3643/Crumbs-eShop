import React from "react";
import './Home.css'
import HeroCupcakes from '../../assets/img/CupcakesHero.PNG'
import HeroCakes from '../../assets/img/CakesHero.PNG'
import HeroCookies from '../../assets/img/CoockiesHero.PNG'
import {NavLink} from "react-router-dom";

export default () => (
    <section className="container-wide home">
        <div className="grid">
            <NavLink to="/shopfront/muffin" className="grid-container first"
                     style={{backgroundImage: "url(" + HeroCupcakes + ")"}}>
                <p className="grid-container__description"> Muffins </p>
            </NavLink>
            <NavLink to="/shopfront/cake" className="grid-container second"
                     style={{backgroundImage: "url(" + HeroCakes + ")"}}>
                <p className="grid-container__description"> Cakes </p>
            </NavLink>
            <NavLink to="/shopfront/kit" className="grid-container third"
                     style={{backgroundImage: "url(" + HeroCookies + ")"}}>
                <p className="grid-container__description"> Baking kits </p>
            </NavLink>
        </div>
    </section>
)