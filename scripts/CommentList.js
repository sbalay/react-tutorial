import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    const commentNodes = this.props.comments.map(comment => {
      return (
          <Comment author={comment.author}>{comment.text}</Comment>
        );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
