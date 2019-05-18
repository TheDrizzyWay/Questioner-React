import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dummyImage from '../assets/images/meeting2.jpg';

const styles = {
    card: {
        maxWidth: 300
    },
    media: {
        objectFit: 'cover'
    }
};

const MeetupCard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea className="meet_card">
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="170"
                    image={dummyImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
            Sample Meetup
                    </Typography>
                    <Typography component="p">
            LOCATION: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
                    </Typography>
                    <Typography component="h3" color="primary" variant="title">
            DATE: 05/05/2019
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary">
          View Details
                </Button>
            </CardActions>
        </Card>
    );
};

MeetupCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MeetupCard);
