import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

export default class CommentBox extends React.Component {
  componentDidMount() {
    this.fetchComments();
    setInterval(this.fetchComments.bind(this), this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: data => {
        this.setState({data: data});
      }.bind(this),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  fetchComments() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({comments: data});
      }.bind(this),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
}
