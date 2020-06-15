import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop"
import Content from "./pages/content/Content";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    state = {
        cartOpen: false,
        navigationOpen: false,
        searchOpen: false
    }

    navigationToggleClickHandler = () => {
        this.setState((prevState) => {
            return {navigationOpen: !prevState.navigationOpen}
        })
    }

    cartToggleClickHandler = () => {
        this.setState((prevState) => {
            return {cartOpen: !prevState.cartOpen}
        })
    }

    searchToggleClickHandler = () => {
        this.setState((prevState) => {
            return {searchOpen: !prevState.searchOpen}
        })
    }

    backdropClickHandler = () => (
        this.setState({navigationOpen: false, cartOpen: false, searchOpen: false})
    )

    render() {
        let backdrop;

        if (this.state.navigationOpen || this.state.cartOpen || this.state.searchOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <BrowserRouter>
            <div className="App">
                <Navigation navigationClickHandler={this.backdropClickHandler} show={this.state.navigationOpen}/>
                {backdrop}
                <div className="main">
                    <Header
                        navigationClickHandler={this.navigationToggleClickHandler}
                        cartClickHandler={this.cartToggleClickHandler}
                        searchClickHandler={this.searchToggleClickHandler}
                    />
                    <Search show={this.state.searchOpen}/>
                    <Content/>
                    <Footer/>
                </div>
                <Cart cartClickHandler={this.backdropClickHandler} show={this.state.cartOpen}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
