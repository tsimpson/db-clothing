import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInSignUp from './pages/signin-signup/signin-signup';

import Header from './components/header/header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
