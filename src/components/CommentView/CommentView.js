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
    }
  }

  handleChangeForResponse = (event) => {
    // send comment to redux
    this.props.dispatch(
      {
        type: this.state.storeComments,
        payload: event.target.value
      }
    )
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    this.postResponseToDatabase();
  }

  postResponseToDatabase = () => {
    // send all responses to database
    axios.post('/api/feedback', this.props.feedback)
      .then((response) => {
        console.log('submitted', this.props.feedback)
        this.props.dispatch({
          type: this.state.clearResponses
        })
        // redirect user to home page
        this.props.history.push('/5')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state.commentResponse)
    console.log(this.props.feedback)
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