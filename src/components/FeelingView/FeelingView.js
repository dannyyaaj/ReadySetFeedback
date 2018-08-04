import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import StyledNextButton from '../NextButton/NextButton'

const styles = () => ({
  container: {
    textAlign: 'center',
    margin: '1.5rem 0'
  },
  formTitle: {
    marginBottom: '1rem'
  }
})


class FeelingView extends Component {
  render() {
    return (
      <div>
        <div className={this.props.classes.container}>
          <FormControl component="fieldset">
            <FormLabel component="legend"
            className={this.props.classes.formTitle}
            >How Are You Feeling Today?</FormLabel>
            <RadioGroup>
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
        </div>
        <StyledNextButton />
      </div>

    )
  }
}

const styledFeelingView = (withStyles(styles)(FeelingView))
export default connect()(styledFeelingView);