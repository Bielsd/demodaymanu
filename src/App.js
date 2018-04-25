import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Banner from './Banner.js';

class App extends Component {
  render() {
    return (
    <div>
      <Menu/>
      <Banner/>
    </div>
      
    );
  }
}

export default App;
