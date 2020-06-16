import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop"
import Content from "./pages/Content/Content";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import history from './history'
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    state = {
        tag: "",
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

    setTagHandler = (tag) => {
        this.setState({tag: tag})
    }

    render() {
        let backdrop;

        if (this.state.navigationOpen || this.state.cartOpen || this.state.searchOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <BrowserRouter history={history}>
                <div className="App">
                    <Navigation
                        onClickSetTag={this.setTagHandler}
                        navigationClickHandler={this.backdropClickHandler}
                        show={this.state.navigationOpen}
                    />
                    {backdrop}
                    <div className="main">
                        <Header
                            navigationClickHandler={this.navigationToggleClickHandler}
                            cartClickHandler={this.cartToggleClickHandler}
                            searchClickHandler={this.searchToggleClickHandler}
                        />
                        <Search
                            onClickSetTag={this.setTagHandler}
                            show={this.state.searchOpen}
                        />
                        <Content
                            tag={this.state.tag}
                        />
                        <Footer/>
                    </div>
                    <Cart
                        cartClickHandler={this.backdropClickHandler}
                        show={this.state.cartOpen}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
