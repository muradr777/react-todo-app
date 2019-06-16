import React, { Component } from "react";
// import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodos } from "../actions/todoActions";

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
    // axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
    //   this.setState({ todos: res.data });
    // });
  }

  render() {
    const { todos } = this.props;

    return (
      <section className="todo-list">
        <h2 className="list-title">Todo List</h2>
        <ol className="o__list">
          {todos.length ? (
            todos.map(todo => <Todo todo={todo} key={todo.id} />)
          ) : (
            <small>There is no Todos right now...</small>
          )}
        </ol>
        <AddTodo />
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

export default connect(
  mapStateToProps,
  { getTodos }
)(Todos);
