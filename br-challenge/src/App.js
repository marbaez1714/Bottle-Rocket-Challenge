import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
