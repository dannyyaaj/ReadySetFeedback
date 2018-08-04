import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
class FeelingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionType: 'STORE_FEELING',
      feelingResponse: '',
      lowestScoreLabel: `1 - I'm very stressed`,
      highestScoreLabel: `5 - I'm feeling great!`
    }
  }

  handleChangeForResponse = (event) => {
    this.setState({
      ...this.state,
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
        // send feeling response to redux
        this.props.dispatch(
          {
            type: this.state.actionType,
            payload: this.state.feelingResponse
          },
          this.props.history.push('/2')
        )
    }
  }

  render() {
    return (
      <div>
        <FeedbackForm
          view={this.state.feelingResponse}
          handleChangeForResponse={this.handleChangeForResponse}
          lowestScoreLabel={this.state.lowestScoreLabel}
          highestScoreLabel={this.state.highestScoreLabel}
        />
        <NextButton handleNextButton={this.handleNextButton} />
      </div>
    )
  }
}

export default connect()(FeelingView);