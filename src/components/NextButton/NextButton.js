// react, react-redux, and local components
import React, { Component } from 'react';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// material ui components
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const styles = () => ({
  button: {
    padding: '0 1rem 0 1.75rem'
  }
})
class NextButton extends Component {
  render() {
    console.log(this.props)
    return (
      <Button
        variant="contained"
        color="secondary"
        className={this.props.classes.button}
        onClick={this.props.handleNextButton}
      >
        NEXT
          <NavigateNextIcon />
      </Button>
    )
  }
}

const StyledNextButton = 
withStyles(styles)(NextButton);

export default StyledNextButton;
