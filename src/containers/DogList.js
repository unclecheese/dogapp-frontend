import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import LoadMoreButton from '../ui/LoadMoreButton';
import DogCard from './DogCard';

const styles = theme => ({
  progress: {
    margin: '100px'
  },
});

const DOGS_PER_PAGE = 20;

const DogQuery = gql`
query readDogs ($limit: Int, $offset: Int) {
  readDogs(limit: $limit, offset: $offset) {
    edges {
      node {
        ID
        Name
        Thumbnail
        IsFavourite
        FavouritingMembers {
          ID
          Name
        }
        Breed {
          Name
        }
        Owner {
          Name
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
`;

class DogList extends Component {
  render () {
    const { classes, loading, readDogs, loadMoreDogs } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    const result = readDogs.edges.map(edge => (
      <DogCard {...edge.node} key={edge.node.ID}/>
    ));

    if (readDogs.pageInfo.hasNextPage) {
      result.push(
        <LoadMoreButton key="__load-more__" loadMore={loadMoreDogs} />
      );
    }

    return result;
  }
}
const DogListWithStyles = withStyles(styles)(DogList);

const DogListWithData = graphql(DogQuery, {
  options() {
    return {
      variables: {
        limit: DOGS_PER_PAGE,
        offset: 0
      }
    }
  },
  props({ data: { loading, readDogs, fetchMore } }) {
    return {
      loading,
      readDogs,
      loadMoreDogs() {
        return fetchMore({
          variables: {
            offset: readDogs.edges.length,
          },
          updateQuery(previousResult, { fetchMoreResult }) {
            if (!fetchMoreResult) return previousResult;

            return {
              ...previousResult,
              readDogs: {
                ...fetchMoreResult.readDogs,
                edges: [
                  ...previousResult.readDogs.edges,
                  ...fetchMoreResult.readDogs.edges
                ]
              }
            };
          },
        })
      }
    }
  }
})(DogListWithStyles);

export default DogListWithData;


