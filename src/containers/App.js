import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import BooksWrapper from '../components/BooksWrapper';
import BooksNav from '../components/BooksNav';
import DeleteModal from '../components/DeleteModal';
import FormModal from '../components/FormModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.formModalModes = {
      add: 'add',
      edit: 'edit'
    };
    this.state = {
      deleteId: null,
      deleteModal: false,
      editBook: null,
      formModal: false,
      formModalMode: this.formModalModes.add
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleFormModal = this.toggleFormModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    this.props.actions.fetchBooks();
  }
  render() {
    let formModalProps = {};
    if (this.state.formModalMode === this.formModalModes.add) {
      formModalProps.formTitle = 'Add book';
    } else {
      formModalProps.formTitle = 'Edit book';
      formModalProps.book = this.state.editBook;
    }
    return (
      <div>
        <BooksNav />
        <BooksWrapper
          books={this.props.books}
          error={this.props.error}
          loading={this.props.error}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        <DeleteModal
          onConfirm={this.handleConfirmDelete}
          toggle={this.toggleDeleteModal}
          isOpen={this.state.deleteModal}
        />
        <FormModal
          handleSubmit={this.handleFormSubmit}
          toggle={this.toggleFormModal}
          isOpen={this.state.formModal}
          {...formModalProps}
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
  toggleFormModal() {
    this.setState({
      formModal: !this.state.formModal
    });
  }
  handleEdit(id) {
    this.setState({
      editBook: id,
      formModal: true,
      formModalMode: this.formModalModes.edit
    });
  }
  handleFormSubmit(book) {
    if (this.state.formModalMode === this.formModalModes.add) {
      this.props.actions.addBook(book);
    } else {
      this.props.actions.updateBook(book);
    }
    this.setState({ formModal: false });
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
