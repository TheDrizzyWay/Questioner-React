import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
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
