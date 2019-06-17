import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class AddTodo extends Component {
  state = {
    title: "",
    completed: false
  };

  handleChange = e => {
    this.setState({ title: e.target.value, completed: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title } = this.state;

    const newTodo = {
      title,
      completed: false
    };

    if (title.length) {
      this.props.addTodo(newTodo);
      this.setState({ title: "" });
    }
    return false;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-todo-form">
        <input
          type="text"
          placeholder="What you need To do?"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
