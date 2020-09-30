import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from "./Pages/Homepage"
import ShopPage from "./Pages/ShopPage"
import Header from './Components/Header'
function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/shop'><ShopPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
