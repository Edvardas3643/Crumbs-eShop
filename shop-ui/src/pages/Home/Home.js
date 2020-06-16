import React from "react";
import './Home.css'
import HeroCupcakes from '../../assets/img/CupcakesHero.PNG'
import HeroCakes from '../../assets/img/CakesHero.PNG'
import HeroCookies from '../../assets/img/CoockiesHero.PNG'

export default () => (
    <section className="container-wide home">
        <div className="grid">
            <div className="grid-container first" style ={ { backgroundImage: "url(" + HeroCupcakes + ")" } }>
                <p className="grid_container__description"> Cupcakes </p>
            </div>
            <div className="grid-container second" style ={ { backgroundImage: "url(" + HeroCakes + ")" } }>
                <p className="grid_container__description"> Cakes </p>
            </div>
            <div className="grid-container third" style ={ { backgroundImage: "url(" + HeroCookies + ")" } }>
                <p className="grid_container__description"> Cookies </p>
            </div>
        </div>
    </section>
)