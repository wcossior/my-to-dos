import { combineReducers } from '@reduxjs/toolkit';
import deleteModalReducer from './slices/deleteModalSlice';

const rootReducer = combineReducers({
  modalDelete: deleteModalReducer,
});

export default rootReducer;
