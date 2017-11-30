import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import Books from '../components/Books';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchBooks();
  }
  render() {
    return <Books books={this.props.books} />;
  }
}

const bindStateToProps = state => ({
  books: state.books.books,
  loading: state.books.isProcessingRequest,
  error: state.books.error
});

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(booksActions, dispatch)
});

App = connect(bindStateToProps, bindDispatchToProps)(App);

export default App;
