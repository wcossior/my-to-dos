import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Task} from "../../models/models";

interface initialTodoState {
    todos: Task[];
    gettingTodosState: string;
    errorWhenGettingTodos: string;
}

const initialState: initialTodoState = {
    todos: [],
    gettingTodosState: "",
    errorWhenGettingTodos: ""
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        gettingTodos: (state) => {
            state.gettingTodosState = "getting";
        },
        gettingTodosCompleted: (state) => {
            state.gettingTodosState = "completed";
        },
        errorGettingTodos: (state) => {
            state.errorWhenGettingTodos = "Error when getting todos";
        },
        setTodos: (state, action: PayloadAction<Task[]>) => {
            state.todos = action.payload;
            state.errorWhenGettingTodos = "";
            state.gettingTodosState = "";
        },
    }
});

export const { gettingTodos, gettingTodosCompleted, errorGettingTodos, setTodos } = todoSlice.actions;
export default todoSlice.reducer;