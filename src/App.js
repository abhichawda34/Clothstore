import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage";
import ShopPage from "./Pages/ShopPage";
import Header from './Pages/Header';
import SignInAndUp from './Pages/Sign-in-and-up';
import {auth} from './Firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();
    this.state ={
      currentUser: null
    };
  };

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/'><Homepage /></Route>
          <Route exact path='/shop'><ShopPage /></Route>
          <Route exact path='/signin'><SignInAndUp /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
