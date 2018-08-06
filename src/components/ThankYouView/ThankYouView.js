import React, { Component } from 'react';
import ThankYouButton from '../ThankYouButton/ThankYouButton';


class ThankYouView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleThankYouButton = (event) => {
    event.preventDefault();
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <ThankYouButton
        handleThankYouButton={this.handleThankYouButton}
        />
      </div>
    )
  }
}

export default ThankYouView;