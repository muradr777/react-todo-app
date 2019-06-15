import React from "react";

const AddTodo = ({ value, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="create-todo-form">
      <input
        type="text"
        placeholder="What you need To do?"
        value={value}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddTodo;
