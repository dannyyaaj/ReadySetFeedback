// react, react-redux, and local components
import React, { Component } from 'react';
// material ui components
import { withStyles } from '@material-ui/core';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    padding: '0 1rem 0 1.75rem'
  }
})
class NextButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        className={this.props.classes.button}
        onClick={this.props.handleNextButton}
      >
        Next
          <NavigateNextIcon />
      </Button>
    )
  }
}

const StyledNextButton = 
withStyles(styles)(NextButton);

export default StyledNextButton;
