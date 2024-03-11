import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_COMPLETED,
  UPDATE_TODO,
  SET_FILTER,
} from "./actions";

function todos(state = { tasks: [], filter: "All" }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Math.random(),
            value: action.text,
            status: false,
            editMode: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((todo) =>
          todo.id === action.id ? { ...todo, status: !todo.status } : todo
        ),
      };
    case REMOVE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.status === false),
      };
    case UPDATE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((todo) =>
          todo.id === action.id ? { ...todo, value: action.newValue } : todo
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export default todos;
