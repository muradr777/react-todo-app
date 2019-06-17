import axios from "axios";
import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./types";

export const getTodos = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const addTodo = todo => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
};

export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};
