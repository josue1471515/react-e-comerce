import React, { Component } from 'react';
import Layout from './components/layout'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserCreate from './containers/users';
class App extends Component {
  render() {
    return (

      <div className="App">
      
        <Layout />

        Hello
      </div>
    );
  }
}

export default App;
