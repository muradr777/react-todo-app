import React, { Component } from "react";
// import axios from "axios";
import uuid from "uuid";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_TODOS } from "../actions/types";

class Todos extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.props.getTodos();
    // axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
    //   this.setState({ todos: res.data });
    // });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { value, todos } = this.props;
    if (value.length) {
      let todo = {
        userId: 1,
        id: uuid(),
        title: value,
        completed: false
      };
      todos.push(todo);
      this.setState({
        value: "",
        todos
      });
    }
    return false;
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleClick = id => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({ todos: newTodos });
  };

  handleDelete = id => {
    const { todos } = this.state;
    let newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  render() {
    const value = "";
    const { todos } = this.props;

    return (
      <section className="todo-list">
        <h2 className="list-title">Todo List</h2>
        <ol className="o__list">
          {todos.length ? (
            todos.map(todo => (
              <Todo
                key={uuid()}
                {...todo}
                handleClick={this.handleClick}
                handleDelete={this.handleDelete}
              />
            ))
          ) : (
            <small>There is no Todos right now...</small>
          )}
        </ol>
        <AddTodo
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch({ type: GET_TODOS })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
