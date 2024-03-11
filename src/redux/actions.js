export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function removeCompleted() {
  return {
    type: REMOVE_COMPLETED,
  };
}
export function updateTodo(id, newValue) {
  return {
    type: UPDATE_TODO,
    id,
    newValue,
  };
}
export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter,
  };
}
