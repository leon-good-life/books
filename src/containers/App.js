import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import Books from '../components/Books';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

class App extends Component {
  constructor(props){
    super(props);
    this.renderBooks = this.renderBooks.bind(this);
  }
  componentDidMount() {
    this.props.actions.fetchBooks();
  }
  render() {
    return (
      <div className="container">
        {this.renderBooks()}
      </div>
    )
  }
  renderBooks(){
    if (this.props.loading) {
      return <Loading />;
    }
    if (this.props.error) {
      return <ErrorMessage error={this.props.error} />;
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
