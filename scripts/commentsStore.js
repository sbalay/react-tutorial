export default {
  _comments: [
      {author: 'Pete Hunt', text: 'This is one comment'},
      {author: 'Jordan Walke', text: 'This is *another* comment'}
  ],
  getComments() {
    return this._comments;
  }
};
