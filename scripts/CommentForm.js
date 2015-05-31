import React from 'react';

export default class CommentForm extends React.Component {
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
  handleSubmit(ev) {
    ev.preventDefault();
    let authorInput = React.findDOMNode(this.refs.author);
    let textInput = React.findDOMNode(this.refs.text);
    this.props.onCommentSubmit({ author: authorInput.value,
                                     text: textInput.value});
    authorInput.value = textInput.value = '';
  }
}
