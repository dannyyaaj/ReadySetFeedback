import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';

class CommentView extends Component {
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentForm />
      </div>
    )
  }
}
export default CommentView