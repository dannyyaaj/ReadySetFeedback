// react, react-redux, and local components
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    textAlign: 'center',
    margin: '1.5rem auto',
    padding: '1.5rem 2rem',
    backgroundColor: 'white',
    height: '16.5rem',
    width: '35rem'
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    width: 1000,
  }
});
class CommentForm extends Component {
  render() {
    return (
      <div className={this.props.classes.container}>
        <form
          onSubmit={this.handleChangeForResponse}
          className={this.props.formContainer}
        >
          <FormControl component="fieldset">
            <FormLabel
              className={this.props.classes.formTitle}
            >
              Any comments you want to leave?
            </FormLabel>
            <TextField
              onChange={this.props.handleChangeForResponse}
              label="We'd love to hear from you."
              placeholder="Let us know what you're thinking."
              inputProps={{
                'aria-label': 'Description',
              }}
              multiline
              className={this.props.textField}
              fullWidth
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
