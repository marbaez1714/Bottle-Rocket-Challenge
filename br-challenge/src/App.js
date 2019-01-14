import React, { Component } from 'react';
import Header from './components/header';
import ListView from './pages/listView';
import RestaurantData from './components/testData.json'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: RestaurantData,
      chosenRestaurant: {},
      showDetails: false,
    }
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.closeDetailView = this.closeDetailView.bind(this);
  }

  // sets state to have the selected restaurant and opens the burger menu
  selectRestaurant(restaurant) {
    this.setState({ chosenRestaurant: restaurant, showDetails: true });
  }

  // closes the burger menu 
  closeDetailView() {
    this.setState({ showDetails: false });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <ListView data={this.state.restaurants}
          chosenRestaurant={this.state.selectedRestaurant}
          selectRestaurant={this.selectRestaurant}
          showDetails={this.state.showDetails}
          closeDetailView={this.closeDetailView} />
      </div>
    );
  }
}

export default App;
