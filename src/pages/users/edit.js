import Layout from '../../components/layout'
import React, { Component } from 'react';
import './style.css';

class UserEditPage extends Component {
    render() {
        const { item } = this.props;

        return (
            <React.Fragment>
                Editar usuario
                  </React.Fragment>
        );
    }
}

export default UserEditPage;