import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModalSlice';
import formAddGroupReducer from './slices/formAddGroup'

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
  formAddGroup: formAddGroupReducer,
});

export default rootReducer;
