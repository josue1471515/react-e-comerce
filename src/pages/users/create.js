
import React, { Component } from 'react';
import axios from "axios";

class UserPage extends Component {
    constructor(props) {
        super(props);
        //to access
        this.onChangeuserName = this.onChangeuserName.bind(this);
        this.onChangeuserEmail = this.onChangeuserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserPasswordCheck = this.onChangeUserPasswordCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userCheckPassword: '',
            userCompleted: false
        }
    };

    onChangeuserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangeuserEmail(e) {
        this.setState({
            userEmail: e.target.value
        });
    }
    onChangeUserPassword(e) {
        this.setState({
            userPassword: e.target.value
        });
    }

    onChangeUserPasswordCheck(e) {
        this.setState({
            userCheckPassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("make submit ");
        console.log("make submit " + this.state.userCheckPassword);
        console.log("make submi t" + this.state.userCompleted);
        console.log("make submit " + this.state.userName);
        console.log("make submit " + this.state.userPassword);

        const newUser =({
            userName:this.state.userName,
            userPassword:this.state.userPassword,
            userEmail:this.state.userEmail,
        }) 

        axios.post('http://localhost:5000/add',newUser)
        .then(res => console.log(res.data));

        this.setState(
            {
                userName: '',
                userEmail: '',
                userPassword: '',
                userCheckPassword: '',
                userCompleted: false
            }
        )
    }

    render() {
        const { item } = this.props;

        return (
            <React.Fragment>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="inputuserName">User name</label>
                        <input type="text" value={this.state.onChangeuserName} onChange={this.onChangeuserName} className="form-control" id="inputuserName" placeholder="User name" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" value={this.state.userEmail} onChange={this.onChangeuserEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" value={this.state.onChangeUserPassword} onChange={this.onChangeUserPassword} id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="inputPasswordCheck">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPasswordCheck" value={this.state.onChangeUserPasswordCheck} onChange={this.userCheckPassword} placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </React.Fragment>
        );
    }
}

export default UserPage;
