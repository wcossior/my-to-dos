import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import groupReducer from './slices/group';
import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  group: groupReducer,
  formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
});

export default rootReducer;
