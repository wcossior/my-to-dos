import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import groupReducer from './slices/group';
import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';
import todoReducer from './slices/todos';

import group_reducer from "./slices/group1";

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  group: groupReducer,
  formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
  todos: todoReducer,
  
  group1: group_reducer,
});

export default rootReducer;
