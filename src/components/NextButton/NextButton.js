import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
        color="secondary"
        className={this.props.classes.button}
      >
        NEXT
          <NavigateNextIcon />
      </Button>
    )
  }
}

const StyledNextButton = withStyles(styles)(NextButton);

export default StyledNextButton;
