import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from "../actions/types";

const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      title: "This is first Todo This is first TodoThis is first Todo111"
    },
    {
      id: 2,
      completed: true,
      title: "This is another item"
    },
    {
      id: 3,
      completed: false,
      title: "You need finaly do this"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    default:
      return state;
  }
}
