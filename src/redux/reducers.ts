import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import formAddGroupReducer from './slices/formAddGroup';
import formAddTodoReducer from './slices/formAddTodo';
import formEditTodoReducer from './slices/formEditTodo';

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  formAddGroup: formAddGroupReducer,
  formAddTodo: formAddTodoReducer,
  formEditTodo: formEditTodoReducer,
});

export default rootReducer;
