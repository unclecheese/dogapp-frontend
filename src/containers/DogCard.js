import React, { Component } from 'react';
import GalleryCard from '../ui/GalleryCard';
import FavouriteToggleButton from './FavouriteToggleButton';

class DogCard extends Component {
  render () {
    const { ID, Name, Thumbnail, Owner, Breed, IsFavourite, FavouritingMembers } = this.props;
    const actions = [
      <FavouriteToggleButton key="favourite" dogID={ID} favourite={!IsFavourite} />
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
