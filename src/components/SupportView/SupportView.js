import React, { Component } from 'react'
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
class SupportView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: `Do you feel supported by your Instructors and/or peers today?`,
      actionType: 'STORE_SUPPORT',
      supportResponse: '',
      lowestScoreLabel: `1 - I feel abandoned`,
      highestScoreLabel: `5 - I feel supported!`
    }
  }

  handleChangeForResponse = (event) => {
    this.setState({
      ...this.state,
      supportResponse: event.target.value
    })
  }

  handleNextButton = (event) => {
    event.preventDefault();
    // check if user responded
    switch (this.state.supportResponse) {
      case undefined || null || '':
        alert('Please select a response before moving on')
        break;
      default:
        // send support response to redux
        this.props.dispatch(
          {
            type: this.state.actionType,
            payload: this.state.supportResponse
          },
          this.props.history.push('/4')
        )
    }
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <FeedbackForm
            formTitle={this.state.formTitle}
            view={this.state.supportResponse}
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

const StyledSupportView = withStyles(styles)(SupportView)

export default connect()(StyledSupportView);
