import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CalendarTodayTwoTone } from '@material-ui/icons';
import dummyImage from '../assets/images/No_image.svg.png';

const styles = {
    card: {
        maxWidth: 300
    },
    media: {
        objectFit: 'cover'
    }
};

const MeetupCard = (props) => {
    const { classes, topic, location, image, happeningon, id } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea className="meet_card">
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="170"
                    image={image || dummyImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {topic}
                    </Typography>
                    <Typography component="p" variant="h6">
            Location: {location}
                    </Typography>
                    <Typography component="h3" color="primary" variant="title">
                        <CalendarTodayTwoTone style={{ display: 'inline-flex', verticalAlign: 'middle',
                            fill: '#00bfff' }} /> <p style={{ display: 'inline-flex' }}>{happeningon}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary">
                    <Link to={`/view/${id}`} style={{ textDecoration: 'none' }}>
          View Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

MeetupCard.propTypes = {
    id: PropTypes.number,
    classes: PropTypes.object.isRequired,
    topic: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    happeningon: PropTypes.string
};

export default withStyles(styles)(MeetupCard);
