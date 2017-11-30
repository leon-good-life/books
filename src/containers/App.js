import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import Books from '../components/Books';
import Loading from '../components/Loading';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchBooks();
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
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