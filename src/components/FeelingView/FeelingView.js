import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
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
class FeelingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: `How are you feeling today?`,
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
      <Card className={this.props.classes.card}>
        <CardContent>
          <FeedbackForm
            formTitle={this.state.formTitle}
            view={this.state.feelingResponse}
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

const StyledFeelingView = withStyles(styles)(FeelingView)

export default connect()(StyledFeelingView);