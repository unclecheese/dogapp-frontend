import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import Favourite from 'material-ui-icons/Favorite';
import NotFavourite from 'material-ui-icons/FavoriteBorder';

class FavouriteToggleButton extends React.Component {

  handleClick = () => {
    const { mutate, dogID, favourite } = this.props;
    mutate({
      variables: {
        DogID: dogID,
        Favourite: favourite
      }
    });
  };

  render () {
    const { favourite } = this.props;
    return (
      <IconButton onClick={this.handleClick}>
        {favourite ? <NotFavourite /> : <Favourite />}
      </IconButton>
    )
  }
}

const UnfavouriteMutation = gql`
  mutation createFavourite($DogID: ID!, $Favourite: Boolean!) {
    toggleFavourite(DogID: $DogID, Favourite: $Favourite) {    
      ID
    }
  }
`;

const FavouriteToggleButtonWithMutation = graphql(UnfavouriteMutation)(FavouriteToggleButton);

export default FavouriteToggleButtonWithMutation;