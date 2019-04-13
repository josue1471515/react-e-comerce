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
                  <Link to={'/contact'} className="nav-link">Products</Link>
                </li>
                <li className="nav-item mt-2 mt-md-0">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li className="nav-item mt-2 mt-md-0">
                  <Link to={'/users/list'} className="nav-link">List Users</Link>
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
                  <a className="nav-link  " href="/users/create">Register</a>
                </li>
              </ul>
            </div>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/users/list' component={UserCreate.UserList} />
            <Route path='/contact' component={UserCreate.UserDelete} />
            <Route path='/users/edit/:id' component={UserCreate.UserEdit} />
            <Route path='/users/create' component={UserCreate.UserCreate} />

            <Route exact path='/products/list' component={UserCreate.UserList} />
            <Route path='/products/edit/:id' component={UserCreate.UserEdit} />
            <Route path='/products/create' component={UserCreate.UserCreate} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavPage;