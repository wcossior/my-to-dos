import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import groupReducer from './slices/group';
import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';
import todoReducer from './slices/todo';

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  group: groupReducer,
  formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
  todo: todoReducer,
});

export default rootReducer;
