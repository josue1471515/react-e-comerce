
import Layout from '../../components/layout'
import React, { Component } from 'react';
import './style.css';

class UserPage extends Component {
    render() {
            const {item}  = this.props;

        return (
            <React.Fragment> 
                <Layout />
                    
              
                  <form className="form-signin">
                  <div className="form-group">
                          <label for="inputUsername">User name</label>
                          <input type="email" value={this.props.title} className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="User name" />
                      </div>
                      <div className="form-group">
                          <label for="inputEmail">Email address</label>
                          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                          <label for="inputPassword">Password</label>
                          <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                      </div>
                      <div className="form-group">
                          <label for="inputPasswordCheck">Confirm Password</label>
                          <input type="password" className="form-control" id="inputPasswordCheck" aria-describedby="emailHelp" placeholder="Confirm Password" />
                      </div>
                      <button type="submit" className="btn btn-primary">Create Account</button>
                  </form>
                  </React.Fragment>
        );
    }
}

export default UserPage;
