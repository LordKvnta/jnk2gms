import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Footer from "./components/Footer";


function App() {
  

  return (
   <div className='grid-container'>
     <Navbar/>
    <Switch>
      <Route path='/product/:id' component={Details}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/cards' component={ProductList}/>
      <Route exact path='/' component={Home}/>
      <Route component={Default}/>
    </Switch>
    <Footer/>
   </div>
  );
}

export default App;
