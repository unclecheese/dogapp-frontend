import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import DogList from './containers/DogList';
import './App.css';

class App extends Component {

  render() {
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
          </Toolbar>
        </AppBar>
        <div className="grid">
          <DogList />
        </div>
      </div>
    );
  }
}

export default App;