import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import Books from '../components/Books';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import BooksNav from '../components/BooksNav';
import DeleteModal from '../components/DeleteModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteId: null,
      deleteModal: false
    };
    this.renderBooks = this.renderBooks.bind(this);
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
        <div className="container mt-3">{this.renderBooks()}</div>
        <DeleteModal
          onConfirm={this.handleConfirmDelete}
          toggle={this.toggleDeleteModal}
          isOpen={this.state.deleteModal}
        />
      </div>
    );
  }
  renderBooks() {
    if (this.props.loading) {
      return <Loading />;
    }
    if (this.props.error) {
      return <ErrorMessage error={this.props.error} />;
    }
    return <Books books={this.props.books} onDelete={this.handleDelete} />;
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
