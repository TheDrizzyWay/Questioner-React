import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    avatar: {
        height: 45,
        width: 45
    }
};

export const TopBar = (props) => {
    const { classes, section } = props;
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {section}
                    </Typography>
                    <IconButton
                        color="inherit"
                    >
                        <AccountCircle className={classes.avatar}/>
                    </IconButton>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    section: PropTypes.string.isRequired
};

export default withStyles(styles)(TopBar);
