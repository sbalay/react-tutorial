import React from 'react';
import CommentBox from './CommentBox';

export default class App extends React.Component {
  render() {
    return (
      <CommentBox url="comments.json" pollInterval={2000} />
    );
  }
}
