import React, {useState} from 'react';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop"
import Content from "./pages/Content/Content";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import history from './history'
import {BrowserRouter} from "react-router-dom";

export default () => {

    const AppContext = React.createContext(null)
    const UserContext = React.createContext(null)

    const [cartOpen, setCartOpen] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    const navigationToggleClickHandler = () => {
        setNavigationOpen(!navigationOpen)
    }

    const cartToggleClickHandler = () => {
        setCartOpen(!cartOpen)
    }

    const searchToggleClickHandler = () => {
        setSearchOpen(!searchOpen)
    }

    const backdropClickHandler = () => {
        setCartOpen(false);
        setNavigationOpen(false);
        setSearchOpen(false);
    }

    let backdrop;

    if (navigationOpen || cartOpen || searchOpen) {
        backdrop = <Backdrop click={backdropClickHandler}/>
    }


    return (
        <UserContext value={{
            userLoggedIn,
            changeUser: () => setUserLoggedIn(!userLoggedIn),
            setUserData,
            userData
        }}>
            <BrowserRouter history={history}>
                <div className="App">
                    <Navigation
                        navigationClickHandler={backdropClickHandler}
                        show={navigationOpen}
                    />
                    {backdrop}
                    <div className="main">
                        <Header
                            navigationClickHandler={navigationToggleClickHandler}
                            cartClickHandler={cartToggleClickHandler}
                            searchClickHandler={searchToggleClickHandler}
                        />
                        <Search
                            show={searchOpen}
                        />
                        <Content/>
                        <Footer/>
                    </div>
                    <Cart
                        cartClickHandler={backdropClickHandler}
                        show={cartOpen}
                    />
                </div>
            </BrowserRouter>
        </UserContext>
    );
}
