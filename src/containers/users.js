import React from 'react';
import UserCreatePage from '../pages/users/create';
import UserEditPage from '../pages/users/edit';
import UserDeletePage from '../pages/users/delete';
import UserListPage from '../pages/users/list';

 class UserCreate extends React.Component{
    render() {
        return (
                <UserCreatePage title="hola josue" />
                );
    }
}

class UserEdit extends React.Component{
 
    render() {
        return (
                <UserEditPage title="hola josue" idUser = {this.props.match.params.id}  />
                );
    }
}

 class UserDelete extends React.Component{
    render() {
        return (
                <UserDeletePage title="hola josue" />
                );
    }
}

class UserList extends React.Component{
    render() {
        return (
                <UserListPage title="hola josue" />
                );
    }
}


export default {UserCreate,UserEdit,UserList,UserList};