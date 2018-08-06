import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm/CommentForm';
import SubmitButton from '../SubmitButton/SubmitButton';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    feedback: state
  }
}
class CommentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: `How are you feeling today?`,
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
        resolve(
          this.props.dispatch({
              type: this.state.storeComments,
              payload: this.state.commentResponse
            })
        )
        reject(
          console.log('dispatch did not go through')
        )
    })
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    this.storeCommentInRedux()
      .then(data => {
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
    console.log(this.props.feedback, 'redux state');
    console.log(this.state.commentResponse,'local state')
    return (
      <div>
        <CommentForm
          handleChangeForResponse={this.handleChangeForResponse}
        />
        <SubmitButton
          handleSubmitButton={this.handleSubmitButton}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps)(CommentView);