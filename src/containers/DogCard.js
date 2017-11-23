import React, { Component } from 'react';
import GalleryCard from '../ui/GalleryCard';
import IconButton from 'material-ui/IconButton';
import Favourite from 'material-ui-icons/Favorite';
import NotFavourite from 'material-ui-icons/FavoriteBorder';

class DogCard extends Component {
  render () {
    const { Name, Thumbnail, Owner, Breed, IsFavourite, FavouritingMembers } = this.props;
    const actions = [
      IsFavourite
        ? <IconButton key="favourite"><Favourite /></IconButton>
        : <IconButton key="favourite"><NotFavourite /></IconButton>
    ];

    const favouritesList = FavouritingMembers.map(fave => fave.Name).join(', ');

    return (
      <GalleryCard
        title={Name}
        image={Thumbnail}
        actions={actions}
      >
        <h3>{Breed.Name}</h3>
        <h4>Owned by {Owner.Name}</h4>
        {(favouritesList.length > 0) &&
          <p><strong>Favourited by:</strong> {favouritesList}</p>
        }
      </GalleryCard>
    );
  }
}

export default DogCard;
