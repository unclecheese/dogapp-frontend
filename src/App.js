import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import LoginForm from './containers/JWTLoginForm';
import DogList from './containers/DogList';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './App.css';

class App extends Component {
  
  render() {
    const { data: { validateToken, loading } } = this.props;
    if (loading) {
      return null;
    }
    return (
      <div className="App">
        <AppBar
          position="fixed"
          color="default"
        >
          <Toolbar>
            <Typography type='title' color='inherit'>
              Dog Dating App
            </Typography>
            {validateToken.Valid && 'You are logged in.'}
            {!validateToken.Valid && <LoginForm />}
          </Toolbar>
        </AppBar>
        <div className="grid">
          <DogList />
        </div>
      </div>
    );
  }
}

const validateToken = gql`
query validateToken {
    validateToken {
      Valid
      Message
      Code
    }
}`;

export default graphql(validateToken)(App);