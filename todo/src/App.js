import './App.css';
import React from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import { Filter } from './utils/Enums';

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          todos: [],
          activeFilter: Filter.all
      };
  }

  createTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
      ]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, completed: !item.completed} :
          item
          )
      }
    );
  }

  updateTitle = (id, title) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title} :
          item
          )
      }
    );
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(
        item => item.id !== id
        )
      }
    );
  }

  updateFilter = (activeFilter) => {
    this.setState({
      activeFilter
    });
  }

  render() {
    return (
        <section className="todoapp">
          <Header createTodo={this.createTodo}/>
          <TodoList
            activeFilter={this.state.activeFilter}
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            updateTitle={this.updateTitle}/>
          {
            this.state.todos.length > 0 &&
            <Footer
              todos={this.state.todos}
              activeFilter={this.state.activeFilter}
              updateFilter={this.updateFilter}/>
          }
        </section>
      );
  }
}

export default App;
