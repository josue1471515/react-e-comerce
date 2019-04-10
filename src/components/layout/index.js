import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import { jsboot } from 'bootstrap/dist/css/bootstrap.min.css'
import { FaOpencart } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../../App';
import UserCreate from '../../containers/users';

class NavPage extends Component {
  render() {
    return (
      <React.Fragment>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">  <img src={logo} className="App-logo" alt="logo" /></a>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item mt-2 mt-md-0">
                <a className="nav-link" href="#">Deals and Promotions</a>
              </li>
              <li className="nav-item mt-2 mt-md-0">
                <a className="nav-link" href="#">Configurations</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item  ">
                <a className="nav-link" href="#"><FaOpencart size={25} /></a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link  " href="#">Login</a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link  " href="#">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavPage;