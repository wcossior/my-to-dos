import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModal';
import formAddGroupReducer from './slices/formAddGroup'
import formAddTodoReducer from './slices/formAddTodo'

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  formAddGroup: formAddGroupReducer,
  formAddTodo: formAddTodoReducer,
});

export default rootReducer;
