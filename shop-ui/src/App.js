import React, {useState} from 'react';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop"
import Content from "./pages/Content/Content";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import {BrowserRouter} from "react-router-dom";
import Errors from "./components/Errors/Errors";


const AppContext = React.createContext(null)
const UserContext = React.createContext(null)

export default () => {

    const [error, setError] = useState(null)
    const [cartOpen, setCartOpen] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [userData, setUserData] = useState(null)
    const [orderHistory, setOrderHistory] = useState(null)

    const [cart, setCart] = useState(null)

    const backdropClickHandler = () => {
        setCartOpen(false);
        setNavigationOpen(false);
        setSearchOpen(false);
    }

    const appContext = {
        searchBlockHandler: () => setSearchOpen(!searchOpen),
        navigationBlockHandler: () => setNavigationOpen(!navigationOpen),
        cartBlockHandler: () => setCartOpen(!cartOpen),
        backdropHandler: () => backdropClickHandler(),

        navigationBlock: navigationOpen,
        cartBlock: cartOpen,
        searchBlock: searchOpen,

        cart,
        setCart,

        errorNotification: error,
        setErrorNotification: (content) => setError(content),
        clearErrorNotification: () => setError(null)

    }

    const userContext = {
        login: (user) => setUserData(user),
        logout: () => setUserData(null),
        userLoggedIn: () => !!userData,
        setUserData,
        userData,

        orderHistory,
        setOrderHistory,
    }

    let backdrop;

    if (navigationOpen || cartOpen || searchOpen) {
        backdrop = <Backdrop click={backdropClickHandler}/>
    }

    return (
        <AppContext.Provider value={appContext}>
            <UserContext.Provider value={userContext}>
                <BrowserRouter>
                    <div className="App">
                        <Navigation/>
                        {backdrop}

                        <div className="main">
                            <Header/>
                            <Search/>
                            <Errors/>
                            <Content/>
                            <Footer/>
                        </div>
                        <Cart/>
                    </div>
                </BrowserRouter>
            </UserContext.Provider>
        </AppContext.Provider>
    );
}

export {UserContext, AppContext}
