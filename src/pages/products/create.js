
import React, { Component } from 'react';
import axios from "axios";
import Upload from '../../components/upload';
import './style.css'
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
        this.onChangeImages = this.onChangeImages.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onChangeImages(e){
        console.log(e);
    }

    onSubmit(e) {
        e.preventDefault();
        var sss = this;
        const newProduct = ({
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice,
            productDiscountedPrice: this.state.productDiscountedPrice,
            productThumbnail: this.state.productThumbnail,
        })

        axios.post('http://localhost:5000/products/add', newProduct)
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
                <form className="container" onSubmit={this.onSubmit}>
                    <div>
                        <h2>
                            Create Product
                        </h2>
                        <br></br>
                    </div>
                    <div className="form-group">

                        <label htmlFor="inputProductName">Product Name</label>
                        <input type="text" value={this.state.productName} onChange={this.onChangeProductName} className="form-control" id="inputProductName" placeholder="Product name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">Product Description</label>
                        <textarea name="Text1" className="form-control" id="inputDescription" value={this.state.productDescription} onChange={this.onChangeProductDescription} cols="40" rows="5" placeholder="Enter Description"></textarea>
                        <small id="ProductHelp" className="form-text text-muted">Give the best description of your product.</small>
                    </div>
                    <div className="row">
                        <div className="col" >
                            <label htmlFor="inputProductPrice">Price</label>
                            <input type="number" className="form-control" value={this.state.userPassword} onChange={this.onChangeUserPassword} id="inputProductPrice" placeholder="Price Product" />
                        </div>
                        <div className="col" >
                            <label htmlFor="inputDiscountPrice">Discounted Price Password %</label>
                            <input type="number" className="form-control" id="inputDiscountPrice" value={this.state.userCheckPassword} onChange={this.userCheckPassword} placeholder="Discount " />
                        </div>
                    </div>
                    <br />
                    <div className="form-group text-center" >
                        <Upload onChange={this.onChangeImages} />
                    </div >
                    <div className="from-group" style = {{paddingBottom:"15px"}} >
                        <button type="submit" className="btn btn-primary" >Create Account</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default UserPage;
