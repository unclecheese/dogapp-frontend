import React, { Component } from 'react';
import GalleryCard from '../ui/GalleryCard';

class DogCard extends Component {
  render () {
    const { Name, Thumbnail, Owner, Breed } = this.props;
    const actions = [];

    return (
      <GalleryCard
        title={Name}
        image={Thumbnail}
        actions={actions}
      >
        <h3>{Breed.Name}</h3>
        <h4>Owned by {Owner.Name}</h4>
      </GalleryCard>
    );
  }
}

export default DogCard;
