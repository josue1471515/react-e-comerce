import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import { FaOpencart } from 'react-icons/fa';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import UserCreate from '../../containers/users';

class NavPage extends Component {
  render() {
    return (
      <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">  <img src={logo} className="App-logo" alt="logo" /></a>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to={'/'} className="nav-link"> Home </Link>
                </li>
                <li className="nav-item mt-2 mt-md-0">
                  <Link to={'/contact'} className="nav-link">Contact</Link>
                </li>
                <li className="nav-item mt-2 mt-md-0">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li className="nav-item mt-2 mt-md-0">
                  <Link to={'/list'} className="nav-link">List Users</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item  ">
                  <a className="nav-link" href="/"><FaOpencart size={25} /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " href="/">Register</a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={UserCreate.UserList} />
            <Route path='/contact' component={UserCreate.UserDelete} />
            <Route path='/edit/:id' component={UserCreate.UserEdit} />
            <Route path='/list' component={UserCreate.UserList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavPage;