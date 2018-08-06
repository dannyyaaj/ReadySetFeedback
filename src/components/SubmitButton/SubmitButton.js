// react, react-redux, and local components
import React, { Component } from 'react';
// material ui components
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll'

const styles = () => ({
  button: {
    padding: '0 .75rem 0 1.45rem'
  },
  icon: {
    padding: '0 0 0.3rem 0',
    display: 'inline-flex'
  }
})
class SubmitButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={this.props.classes.button}
        onClick={this.props.handleSubmitButton}
      >
        Submit
        &nbsp;
        <DoneAllIcon 
          className={this.props.classes.icon} 
        />
      </Button>
    )
  }
}

const StyledSubmitButton =
  withStyles(styles)(SubmitButton);

export default StyledSubmitButton;
