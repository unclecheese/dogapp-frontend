import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 200
  }
};

class GalleryCard extends Component {
  render () {
    const { classes, image, title, children, actions } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography type='headline' component='h2' align='left'>
            {title}
          </Typography>
          <Typography component='div' align='left'>
            {children}
          </Typography>
        </CardContent>
        <CardActions>
          {actions}
        </CardActions>
      </Card>
    );
  }
}

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.element),
  classes: PropTypes.object
};

export default withStyles(styles)(GalleryCard);
