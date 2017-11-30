import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import BooksWrapper from '../components/BooksWrapper';
import BooksNav from '../components/BooksNav';
import DeleteModal from '../components/DeleteModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteId: null,
      deleteModal: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }
  componentDidMount() {
    this.props.actions.fetchBooks();
  }
  render() {
    return (
      <div>
        <BooksNav />
        <BooksWrapper
          books={this.props.books}
          error={this.props.error}
          loading={this.props.error}
          handleDelete={this.handleDelete}
        />
        <DeleteModal
          onConfirm={this.handleConfirmDelete}
          toggle={this.toggleDeleteModal}
          isOpen={this.state.deleteModal}
        />
      </div>
    );
  }
  handleDelete(id) {
    this.setState({ deleteId: id, deleteModal: true });
  }
  handleConfirmDelete() {
    this.props.actions.deleteBook(this.state.deleteId);
    this.setState({ deleteModal: false });
  }
  toggleDeleteModal() {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
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
