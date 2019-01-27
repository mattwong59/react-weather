import React, { Component } from 'react';
import './App.css';

import Titles from './components/titles.js'
import Form from './components/form.js'
import Weather from './components/weather.js'

class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Titles />
        <Form />
        <Weather />
      </React.Fragment>  
    );
  }
}

export default App;
