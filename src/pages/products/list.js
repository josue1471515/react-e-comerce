import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const divStyle = { height: '225px', width: '100%', display: 'block' };
const UserCard = props => (

    <div className="col-md-4">
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={divStyle} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a0ca01d61%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a0ca01d61%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.828125%22%20y%3D%22119.2390625%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
            <div className="card-body">
                <p className="card-text">User Description</p>
                <div className="form-group">
                    <label htmlFor="inputPassword">{props.user.userName}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">{props.user.userPassword}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">{props.user.userEmail}</label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Link to={"/delete/" + props.user._id} className="btn btn-sm btn-outline-secondary" role="button"  >Eliminar</Link>

                        <Link to={"/edit/" + props.user._id} className="btn btn-sm btn-outline-secondary" role="button" >Editar</Link>
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
);

class UserEditPage extends Component {


    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then(resp => {
                this.setState({ users: resp.data });
            }).catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/')
            .then(resp => {
                this.setState({ users: resp.data });
            }).catch(function (error) {
                console.log(error);
            });
    }

    userList() {
        return this.state.users.map(function (params, i) {
            return <UserCard user={params} key={i} />;
        });
    }

    render() {

        return (
            <React.Fragment>
                
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">

                            {this.userList()}

                        </div>

                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default UserEditPage;