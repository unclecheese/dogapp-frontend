import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import GalleryCard from './ui/GalleryCard';
import Favourite from 'material-ui-icons/Favorite';
import NotFavourite from 'material-ui-icons/FavoriteBorder';
import IconButton from 'material-ui/IconButton';
import './App.css';

class App extends Component {

  render() {
    const dogs = [];
    while (dogs.length < 20) {
      const isFavourite = dogs.length % 2 === 0;
      let actions = [
        isFavourite && <IconButton><Favourite/></IconButton>,
        !isFavourite && <IconButton><NotFavourite/></IconButton>
      ];

      dogs.push(
        <GalleryCard
          key={dogs.length}
          title={`Dog #${dogs.length}`}
          image="https://loremflickr.com/320/240/dog"
          actions={actions.filter(action => action)}
        >
          Hello, I'm dog {dogs.length}
        </GalleryCard>
      );
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
          </Toolbar>
        </AppBar>
        <div className="grid">
          {dogs}
        </div>;
      </div>
    );
  }
}

export default App;