import React, { Component } from 'react';
import TodoList from './components/TodoList'
import {createStore} from 'redux';
import todoAction from './actions/TodoAction';

const store = createStore(todoAction);


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;
