import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import DogCard from './DogCard';

const styles = theme => ({
  progress: {
    margin: '100px'
  },
});

const DogQuery = gql`
query readDogs {
  readDogs {
    edges {
      node {
        ID
        Name
        Thumbnail
        Breed {
          Name
        }
        Owner {
          Name
        }
      }
    }
  }
}
`;

class DogList extends Component {
  render () {
    const { classes, data: { loading, readDogs } } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    const result = readDogs.edges.map(edge => (
      <DogCard {...edge.node} key={edge.node.ID}/>
    ));

    return result;
  }
}
const DogListWithStyles = withStyles(styles)(DogList);

const DogListWithData = graphql(DogQuery)(DogListWithStyles);

export default DogListWithData;


