import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Task} from "../../models/models";

interface initialTodosState {
    todos: Task[];
    gettingTodosState: string;
    errorWhenGettingTodos: string;
    submitState: string;
}

const initialState: initialTodosState = {
    todos: [],
    gettingTodosState: "",
    errorWhenGettingTodos: "",
    submitState: "",
}

const todosSlice = createSlice({
    name: 'todos',
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
        loading: (state) => {
            state.submitState = "loading";
        },
        created: (state) => {
            state.submitState = "created";
        },
        clean: (state) => {
            state.submitState = "";
        },
        setGroups: (state, action: PayloadAction<Task[]>) => {
            state.todos = action.payload;
            state.errorWhenGettingTodos = "";
            state.gettingTodosState = "";
        },
    }
});

export const { gettingTodos, gettingTodosCompleted, errorGettingTodos, setTodos, loading, created, clean, setGroups } = todosSlice.actions;
export default todosSlice.reducer;