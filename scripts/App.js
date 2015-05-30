import React from 'react';
import CommentBox from './CommentBox';
import commentsStore from './commentsStore';

export default class App extends React.Component {
  render() {
    return (
      <CommentBox comments={commentsStore.getComments()}/>
    );
  }
}
