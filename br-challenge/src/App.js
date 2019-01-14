import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import ListView from './pages/listView';
import DetailView from './pages/detailView';
import RestaurantData from './components/testData.json'
import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: RestaurantData,
      selectedRestaurant: {},
      showDetails: false,
    }
    this.selectRestaurant = this.selectRestaurant.bind(this)
  }

  selectRestaurant(restaurant) {
    this.setState({ selectedRestaurant: restaurant, showDetails: true })

  }


  render() {
    return (
      <div className="App">
        <Header />
        {/* <ListView data={this.state.restaurants} selectRestaurant={this.selectRestaurant} /> */}
        <DetailView />
      </div>
    );
  }
}

export default App;
