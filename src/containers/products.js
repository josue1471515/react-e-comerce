import React from 'react';
import ProductsCreatePage from '../pages/products/create';
import ProductsEditPage from '../pages/products/edit';
import ProductsDeletePage from '../pages/products/delete';
import ProductsListPage from '../pages/products/list';

 class ProductCreate extends React.Component{
    render() {
        return (
                <ProductsCreatePage title="hola josue" />
                );
    }
}

class ProductEdit extends React.Component{
 
    render() {
        return (
                <ProductsEditPage title="hola josue" idUser = {this.props.match.params.id}  />
                );
    }
}

 class ProductDelete extends React.Component{
    render() {
        return (
                <ProductsDeletePage title="hola josue" />
                );
    }
}

class ProductList extends React.Component{
    render() {
        return (
                <ProductsListPage title="hola josue" />
                );
    }
}


export default {ProductList,ProductDelete,ProductEdit,ProductCreate};