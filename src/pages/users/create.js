
import Layout from '../../components/layout'
import React, { Component } from 'react';
import './style.css';

class UserPage extends Component {
    constructor(props) {
        super(props);
        //to access
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserPasswordCheck = this.onChangeUserPasswordCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
                createUserName:'',
                createUserEmail:'',
                createUserPassword:'',
                createUserCheckPassword:'',
                createUserCompleted:false
        }
    };

    onChangeUserName(e){
        this.setState({
            createUserName:e.target.value
        });
    }

    onChangeUserEmail(e){
        this.setState({
            createUserEmail:e.target.value
        });
    }
    onChangeUserPassword(e){
        this.setState({
            createUserPassword:e.target.value
        });
    }

    onChangeUserPasswordCheck(e){
        this.setState({
            createUserCheckPassword:e.target.value
        });
    }

onSubmit(e){
    e.preventDefault();
    console.log("make submit");
    console.log("make submit"+this.state.createUserCheckPassword);
    console.log("make submit"+this.state.createUserCompleted);
    console.log("make submit"+this.state.createUserName);
    console.log("make submit"+this.state.createUserPassword);


    this.setState(
        {
            createUserName:'',
            createUserEmail:'',
            createUserPassword:'',
            createUserCheckPassword:'',
            createUserCompleted:false
        }
    )
}

    render() {
         const { item } = this.props;
      
        return (
            <React.Fragment>


                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="inputUsername">User name</label>
                        <input type="email" value={this.state.onChangeUserName}  onChange={this.onChangeUserName} className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="User name" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" value={this.state.createUserEmail}  onChange={this.onChangeUserEmail}  aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" value={this.state.onChangeUserPassword}  onChange={this.onChangeUserPassword} id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="inputPasswordCheck">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPasswordCheck" value={this.state.createUserCheckPassword}  onChange={this.createUserCheckPassword} aria-describedby="emailHelp" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </React.Fragment>
        );
    }
}

export default UserPage;
