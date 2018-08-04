// react, react-redux, and local components
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = () => ({
  container: {
    textAlign: 'center',
    margin: '1.5rem 0'
  },
  formTitle: {
    color: 'black',
    marginBottom: '1rem',
  }
})
class FeedbackForm extends Component {

  render() {
    console.log(this.props.view)
    return (
      <div className={this.props.classes.container}>
        <form onSubmit={this.handleChangeForResponse}>
          <FormControl component="fieldset">
            <FormLabel component="legend"
              className={this.props.classes.formTitle}
            >{this.props.formTitle}</FormLabel>
            <RadioGroup
              name={this.props.view}
              value={this.props.view}
              onChange={this.props.handleChangeForResponse}
            >
              <FormControlLabel value="1" control={<Radio />} label={this.props.lowestScoreLabel} />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label={this.props.highestScoreLabel} />
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    )
  }
}

const StyledFeedbackForm =
  withStyles(styles)(FeedbackForm)

export default connect()(StyledFeedbackForm);