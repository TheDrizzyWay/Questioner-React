import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

class AppToast extends Component {
  state = {
      open: false,
      message: ''
  };

  openSnackbar = (message) => {
      const callback = this.props.callback ? this.props.callback : null;
      this.setState({
          open: true,
          message
      });
      setTimeout(() => {
          this.setState({
              open: false,
              message: ''
          });
          if (callback) callback();
      }, 3000);
  };

  render () {
      const message = (
          <span
              id="snackbar-message-id"
              dangerouslySetInnerHTML={{ __html: this.state.message }}
              style={{ textAlign: 'center' }}
          />
      );

      return (
          <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              message={message}
              open={this.state.open}
          />
      );
  }
}

AppToast.propTypes = {
    callback: PropTypes.func
};

export default AppToast;
