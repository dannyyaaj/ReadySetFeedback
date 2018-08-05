// react, react-redux, and local components
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  }
});


class CommentForm extends Component {
  render() {
    return (
      <div>
        <form>
          <FormControl>
            <FormLabel>
              Any comments you want to leave?
            </FormLabel>
            <TextField
              label="We'd love to hear from you."
              multiline
              className={this.props.textField}
              margin="normal"
            />
          </FormControl>
        </form>
      </div>
    )
  }
}

const StyledCommentForm =
  withStyles(styles)(CommentForm)

export default connect()(StyledCommentForm);
