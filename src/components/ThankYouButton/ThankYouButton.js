import React, { Component } from 'react';
// material ui components
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    padding: '0 .75rem 0 1.45rem'
  },
  icon: {
    padding: '0 0 0.3rem 0'
  }
})

class ThankYouButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={this.props.classes.button}
        onClick={this.props.handleThankYouButton}
      >
        Leave New Feedback
        &nbsp;
      </Button>
    )
  }
}

const StyledThankYouButton =
  withStyles(styles)(ThankYouButton);

export default StyledThankYouButton;
