import React from 'react';
import marked from 'marked';

export default class Comment extends React.Component {
  render() {
    const rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}
