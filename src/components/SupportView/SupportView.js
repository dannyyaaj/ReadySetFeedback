import React, { Component } from 'react'
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { Card, CardActions, CardContent } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
      highestScoreLabel: `5 - I feel supported!`,
      responseModalIsOpen: false
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
        this.setState({
          responseModalIsOpen: true
        })
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

  closeResponseModal = () => {
    this.setState({
      responseModalIsOpen: false
    })
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
        <Dialog
          open={this.state.responseModalIsOpen}
          onClose={this.closeResponseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Wait"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please respond before moving forward.
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeResponseModal} color="primary">
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    )
  }
}

const StyledSupportView = withStyles(styles)(SupportView)

export default connect()(StyledSupportView);