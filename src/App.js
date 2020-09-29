import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Homepage from "./Pages/Homepage"
function App() {
  return (
    <div >
      <h1>Hello World</h1>
      <Route exact path='/'><Homepage /></Route>
      <Route exact path='/shop/hats'></Route>
    </div>
  );
}

export default App;
