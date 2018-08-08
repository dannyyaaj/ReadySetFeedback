import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm/CommentForm';
import SubmitButton from '../SubmitButton/SubmitButton';
import axios from 'axios';
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

const mapStateToProps = (state) => {
  return {
    feedback: state
  }
}
class CommentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeComments: 'STORE_COMMENTS',
      clearResponses: 'CLEAR_RESPONSE',
      commentResponse: ''
    }
  }

  handleChangeForResponse = (event) => {
    this.setState({
      commentResponse: event.target.value
    })
  }

  storeCommentInRedux = () => {
    // send comment to redux
    return new Promise((resolve, reject) => {
      if (this.state.commentResponse !== this.props.feedback.comments) {
        return resolve(
          this.props.dispatch({
            type: this.state.storeComments,
            payload: this.state.commentResponse
          })
        )
      } else {
        return reject(
          console.log('dispatch did not go through')
        )
      }

    })
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    this.storeCommentInRedux()
      .then(results => {
        this.postResponseToDatabase();
      })
      .catch(error => {
        console.log(error, 'error in Promise')
      })
  }

  postResponseToDatabase = () => {
    // send all responses to database
    axios.post('/api/feedback', this.props.feedback)
      .then((response) => {
        this.props.dispatch({
          type: this.state.clearResponses
        })
        // redirect user to home page
        this.props.history.push('/5')
      })
      .catch((error) => {
        console.log(error, 'error in post request to DB');
      })
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <CommentForm
            handleChangeForResponse={this.handleChangeForResponse}
          />
          <CardActions className={this.props.classes.cardActions}>
            <SubmitButton
              handleSubmitButton={this.handleSubmitButton}
            />
          </CardActions>
        </CardContent>
      </Card>
    )
  }
}

const StyledCommentView = withStyles(styles)(CommentView)


export default connect(mapStateToProps)(StyledCommentView);