import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  //all ajax/API call are made within this lifecycle as the data should all be loaded before it being rendered
  componentWillMount(){
    //as the localstorage stores the cart items, and if the page is refreshed the data of cartItem in the state gets refreshed as the page refreshes 
    //hence we will be check it the cartitems value exit in the localstorage so that the cart component stays updated
    if(localStorage.getItem('cartItems')){
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      });
    }
  }

  render() {
    return (
      //makes the Redux store available to any nested components that have been wrapped in the connect() function
      <Provider store={store}>
        <div className="container-fluid pb-4">
          <hr className="dline"/>
          <h1 className="text-center">Ecommerce Website</h1>
          <hr className="dline"/>
          <div className="container">
            <Products />
            <hr className="dline"/>
            <Cart />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
