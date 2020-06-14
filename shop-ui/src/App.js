import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop"
import Content from "./pages/content/Content";

class App extends Component {

    state = {
        cartOpen: false,
        navigationOpen: false
    }

    navigationToggleClickHandler = () => {
        this.setState((prevState) => {
            return {navigationOpen: !prevState.navigationOpen}
        })
    }

    cartToggleClickHandler = () => {
        this.setState( (prevState) => {
            console.log(this.state.cartOpen)
            return {cartOpen: !prevState.cartOpen}
        })
    }

    backdropClickHandler = () => (
        this.setState({navigationOpen: false, cartOpen: false})
    )

    render() {
        let backdrop;

        if (this.state.navigationOpen || this.state.cartOpen) {
            backdrop = <Backdrop click = {this.backdropClickHandler}/>
        }

        return (
            <div className="App">
                <Navigation navigationClickHandler={this.backdropClickHandler} show={this.state.navigationOpen} />
                {backdrop}
                <div className="main">
                    <Header
                        navigationClickHandler={this.navigationToggleClickHandler}
                        cartClickHandler={this.cartToggleClickHandler}
                    />
                    <Content />
                </div>
                <Cart cartClickHandler={this.backdropClickHandler} show={this.state.cartOpen}/>
            </div>
        );
    }
}

export default App;
