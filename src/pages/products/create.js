
import React, { Component } from 'react';
import axios from "axios";

// `product_id`       INT           NOT NULL  AUTO_INCREMENT,
// `name`             VARCHAR(100)  NOT NULL,
// `description`      VARCHAR(1000) NOT NULL,
// `price`            DECIMAL(10,2) NOT NULL,
// `discounted_price` DECIMAL(10,2) NOT NULL  DEFAULT '0.00',
// `image`            VARCHAR(150),
// `image_2`          VARCHAR(150),
// `thumbnail`        VARCHAR(150),
// `display`          SMALLINT(6)   NOT NULL  DEFAULT '0',

class UserPage extends Component {
    constructor(props) {
        super(props);
        //to access
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductDiscountedPrice = this.onChangeProductDiscountedPrice.bind(this);
        this.onChangeProductThumbnail = this.onChangeProductThumbnail.bind(this);
 
        this.state = {
            productName: '',
            productDescription: '',
            productPrice: '',
            productDiscountedPrice: '',
            productThumbnail: '',
        }
    };

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeProductDescription(e) {
        this.setState({
            productDescription: e.target.value
        });
    }
    onChangeProductPrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }

    onChangeProductDiscountedPrice(e) {
        this.setState({
            productDiscountedPrice: e.target.value
        });
    }

    onChangeProductThumbnail(e) {
        this.setState({
            productThumbnail: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const newUser =({
            productName:this.state.productName,
            productDescription:this.state.productDescription,
            productPrice:this.state.productPrice,
            productDiscountedPrice:this.state.productDiscountedPrice,
            productThumbnail:this.state.productThumbnail,
        }) 

        axios.post('http://localhost:5000/add',newUser)
        .then(res => console.log(res.data));
       
       
   
        this.setState(
            {
                productName: '',
                productDescription: '',
                productPrice: '',
                productDiscountedPrice: '',
                productThumbnail: '',
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
                        <input type="text" value={this.state.userName} onChange={this.onChangeuserName} className="form-control" id="inputuserName" placeholder="User name" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" value={this.state.userEmail} onChange={this.onChangeuserEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" value={this.state.userPassword} onChange={this.onChangeUserPassword} id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="inputPasswordCheck">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPasswordCheck" value={this.state.userCheckPassword} onChange={this.userCheckPassword} placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </React.Fragment>
        );
    }
}

export default UserPage;
