import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui';

const styles = {
  loadMore: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    justifySelf: 'center',
  },
};

const LoadMoreButton =  ({ loadMore, classes }) => (
  <Button onClick={loadMore} className={classes.loadMore}>Load more...</Button>
);

export default withStyles(styles)(LoadMoreButton);