import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Task} from "../../models/models";

interface initialTodosState {
    todos: Task[];
    gettingTodosState: string;
    errorWhenGettingTodos: string;
}

const initialState: initialTodosState = {
    todos: [],
    gettingTodosState: "",
    errorWhenGettingTodos: ""
}

const todosSlice = createSlice({
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

export const { gettingTodos, gettingTodosCompleted, errorGettingTodos, setTodos } = todosSlice.actions;
export default todosSlice.reducer;