import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
