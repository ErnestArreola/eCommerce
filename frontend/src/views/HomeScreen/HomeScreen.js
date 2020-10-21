import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';


import {Container} from 'reactstrap';

//Components
import image from '../../assets/img/yellow.jpg'
import IndexNavbar from '../../components/Navbar/IndexNavbar';
// import Featured from '../../components/HorizontalFeature/Featured';
import Footer from '../../components/Footers/FooterHome';
import IndexFooter from '../../components/Footers/IndexFooter';
import IndexHeader from '../../components/Headers/IndexHeader';
import Swipe from '../../components/HorizontalFeature/Swipe';
import HeroSection from '../../components/Headers/HeroSection';
import { homeObjOne } from './Data';


function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(( => {
  //   document.body.classList.add()
  // }))

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, [])

  return loading ? <div>
          Loading...</div> :
    error ? <div>{error}</div> :
    <>
    <HeroSection {...homeObjOne}/>
    {/* <IndexHeader/>
    <div >
      <div className = "section-divider"/>
      <Swipe/>
    <div className = "section section-with-space">
      <Container>
        <p> Haha </p>
      </Container>
    </div> */}

      {/* <ul className="products">
        {
          products.map(product =>
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img className = "product-image" src = {product.image} alt= "product" />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
              </div>
            </li>)
        }
      </ul> */}
      {/* </div> */}
      </>
}
export default HomeScreen;