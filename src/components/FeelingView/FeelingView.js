// react, react-redux, and local components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledNextButton from '../NextButton/NextButton'

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
    marginBottom: '1rem'
  }
})
class FeelingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feelingResponse: ''
    }
  }

  handleChangeForResponse = (event) => {
    this.setState({
      feelingResponse: event.target.value
    })
  }

  handleNextButton = (event) => {
    event.preventDefault();
    // check if user responded
    switch (this.state.feelingResponse) {
      case undefined || null || '':
        alert('Please select a response before moving on')
        break;
      default:
        this.props.dispatch(
          {
            type: 'STORE_FEELING',
            payload: this.state
          },
          this.props.history.push('/2')
        )
    }
  }

  render() {
    console.log()
    return (
      <div>
        <div className={this.props.classes.container}>
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend"
                className={this.props.classes.formTitle}
              >How Are You Feeling Today?</FormLabel>
              <RadioGroup
                name="feelingResponse"
                value={this.state.feelingResponse}
                onChange={this.handleChangeForResponse}
              >
                <FormControlLabel value="1" control={<Radio />} label="1 - I'm very stressed" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5 - I'm feeling great!" />
              </RadioGroup>
            </FormControl>
          </form>
        </div>
        <StyledNextButton handleNextButton={this.handleNextButton} />
      </div>

    )
  }
}

const styledFeelingView = (withStyles(styles)(FeelingView))

export default connect()(styledFeelingView);