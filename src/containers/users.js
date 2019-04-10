import React from 'react';
import UserCreatePage from '../pages/users/create';
import UserEditPage from '../pages/users/edit';
import UserDeletePage from '../pages/users/delete';

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
                <UserEditPage title="hola josue" />
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

export default {UserCreate,UserEdit,UserDelete};