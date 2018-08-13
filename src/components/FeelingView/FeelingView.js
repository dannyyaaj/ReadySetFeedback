import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { Card, CardActions, CardContent, Grid } from '@material-ui/core';
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
class FeelingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: `How are you feeling today?`,
      actionType: 'STORE_FEELING',
      feelingResponse: '',
      lowestScoreLabel: `1 - I'm very stressed`,
      highestScoreLabel: `5 - I'm feeling great!`,
      responseModalIsOpen: false
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
        this.setState({
          responseModalIsOpen: true
        })
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

  closeResponseModal = () => {
    this.setState({
      responseModalIsOpen: false
    })
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={10}>
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
        </Grid>
      </Grid>
    )
  }
}

const StyledFeelingView = withStyles(styles)(FeelingView)

export default connect()(StyledFeelingView);