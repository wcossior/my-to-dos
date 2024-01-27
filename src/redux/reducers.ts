import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
// import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';
import todoReducer from './slices/todos';
import group_reducer from "./slices/group";

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  // formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
  group: group_reducer,
  todos: todoReducer,
});

export default rootReducer;
