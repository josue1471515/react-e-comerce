import Layout from '../../components/layout'
import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class UserEditPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeuserName = this.onChangeuserName.bind(this);
        this.onChangeuserEmail = this.onChangeuserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserPasswordCheck = this.onChangeUserPasswordCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            userName:'',
            userEmail:'',
            userPassword:'',
        };
        
    };

    componentDidMount(){

        axios.get('http://localhost:5000/'+this.props.idUser)
        .then(response => {
            console.log(response);
            this.setState({
                userEmail: response.data.userEmail,
                userName: response.data.userName,
                userPassword: response.data.userPassword,
            });
        }).catch(function(err){
            console.log(err);
        })
    }

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

        const updateUser =({
            userName:this.state.userName,
            userPassword:this.state.userPassword,
            userEmail:this.state.userEmail,
        }) 

        axios.post('http://localhost:5000/update/'+this.props.idUser,updateUser)
        .then(res => console.log(res.data));

        this.setState(
            {
                userName: '',
                userEmail: '',
                userPassword: '',
                userCheckPassword: '',
                userCompleted: false
            }
        );

        this.props.history.push("/list");
    }

    render() {
        const { item } = this.props;

        return (
            <React.Fragment>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputuserName">User name</label>
                        <input type="text" value={this.state.userName} onChange={this.onChangeuserName} className="form-control" id="inputuserName" placeholder="User name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" value={this.state.userEmail} onChange={this.onChangeuserEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" value={this.state.userPassword} onChange={this.onChangeUserPassword} id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPasswordCheck">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPasswordCheck" value={this.state.userPassword} onChange={this.onChangeUserPasswordCheck} placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Account</button>
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(UserEditPage);