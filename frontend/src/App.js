import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './App.css';


//views
import HomeScreen from './views/HomeScreen/HomeScreen';
import ProductScreen from './views/ProudctScreen/ProductScreen';
import CartScreen from './views/CartScreen';
import SigninScreen from './views/SignInScreen/SigninScreen';
import RegisterScreen from './views/RegisterScreen/RegisterScreen';
import ProductManageScreen from './views/ProductManageScreen/ProductManageScreen';

//components
import IndexNavbar from "./components/Navbar/IndexNavbar";
import IndexFooter from "./components/Footers/IndexFooter";
import IndexHeader from "./components/Headers/IndexHeader";
import Footer from "./components/Footers/FooterHome";



function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (

    <BrowserRouter>
      <IndexNavbar/>
        <div className="grid-container">
          <main className="main">
            <div className="content">
              <Route path="/products" component={ProductManageScreen}/>
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </div>
          </main>
      </div>
      <Footer>
    </Footer>
    </BrowserRouter>
  );
}

export default App;