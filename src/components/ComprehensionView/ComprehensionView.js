import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import NextButton from '../NextButton/NextButton';
import { Card, CardActions, CardContent } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    margin: '0 auto',
    width: '50%',
    backgroundColor: '#DCEFF5',
  },
  cardActions: {
    padding: '0 40%'
  },
}

class ComprehensionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: `How well did you understand today's material?`,
      actionType: 'STORE_COMPREHENSION',
      comprehensionResponse: '',
      lowestScoreLabel: `1 - I'm totally lost`,
      highestScoreLabel: `5 - I've got this!`
    }
  }

  handleChangeForResponse = (event) => {
    this.setState({
      ...this.state,
      comprehensionResponse: event.target.value
    })
  }

  handleNextButton = (event) => {
    event.preventDefault();
    // check if user responded
    switch (this.state.comprehensionResponse) {
      case undefined || null || '':
        alert('Please select a response before moving on')
        break;
      default:
        // send comprehension response to redux
        this.props.dispatch(
          {
            type: this.state.actionType,
            payload: this.state.comprehensionResponse
          },
          this.props.history.push('/3')
        )
    }
  }

  render() {
    return (
        <Card className={this.props.classes.card}>
          <CardContent>
            <FeedbackForm
              formTitle={this.state.formTitle}
              view={this.state.comprehensionResponse}
              handleChangeForResponse={this.handleChangeForResponse}
              lowestScoreLabel={this.state.lowestScoreLabel}
              highestScoreLabel={this.state.highestScoreLabel}
            />
            <CardActions className={this.props.classes.cardActions}>
              <NextButton handleNextButton={this.handleNextButton} />
            </CardActions>
          </CardContent>
        </Card>
    )
  }
}
const StyledComprehensionView = withStyles(styles)(ComprehensionView)

export default connect()(StyledComprehensionView);