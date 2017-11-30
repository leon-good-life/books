import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from './actions/books';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // Just a little sanity test for rest.js file:
    fetch('/rest/book')
      .then(response => {
        return response.json();
      })
      .then(books => console.log(books));
    
    // Just a little sanity test for redux async actions:
    this.props.actions.fetchBooks();
  }
  componentWillReceiveProps(nextProps){
    // Just a little sanity test for redux async actions:
    console.log('props', nextProps);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
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
