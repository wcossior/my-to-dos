import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import groupReducer from './slices/group';
import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';
import todoReducer from './slices/todos';

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  group: groupReducer,
  formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
  todos: todoReducer,
});

export default rootReducer;
