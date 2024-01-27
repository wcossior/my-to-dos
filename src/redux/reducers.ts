import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/todos';
import group_reducer from "./slices/group";

const rootReducer = combineReducers({
  group: group_reducer,
  todos: todoReducer,
});

export default rootReducer;
