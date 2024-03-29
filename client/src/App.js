import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      < div className = "App" >
        <Provider store = {store} >
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container> 
        </Provider>
        </div>
    );
  }
}

export default App;
