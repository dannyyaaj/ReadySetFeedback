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
      actionType: 'STORE_COMMENTS',
      commentResponse: '',
    }
  }
  handleChangeForResponse = (event) => {
    this.setState({
      ...this.state,
      commentResponse: event.target.value
    })
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    // send feeling response to redux
    this.props.dispatch(
      {
        type: this.state.actionType,
        payload: this.state.commentResponse
      }
      // this.props.history.push('/')
    )

    // send all responses to database
    axios.post('/api/feedback', this.props.feedback)
      .then((response) => {
        console.log(response)
        this.props.history.push('/admin')
      })
        .catch((error) => {
          console.log(error);
        })


  }


  render() {
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