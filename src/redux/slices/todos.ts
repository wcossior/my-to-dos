import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Task} from "../../models/models";

interface initialTodosState {
    todos: Task[];
    gettingTodosState: string;
    errorTodo: string;
    submitState: string;
    deleteState: string;
}

const initialState: initialTodosState = {
    todos: [],
    gettingTodosState: "",
    errorTodo: "",
    submitState: "",
    deleteState: "",
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
        errorRequestTodo: (state) => {
            state.errorTodo = "Connection problems";
            state.gettingTodosState = "";
            state.submitState = "";
        },
        setTodos: (state, action: PayloadAction<Task[]>) => {
            state.todos = action.payload;
            state.errorTodo = "";
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
            state.errorTodo = "";
            state.gettingTodosState = "";
        },
    }
});

export const { gettingTodos, gettingTodosCompleted, errorRequestTodo, setTodos, loading, created, clean, setGroups } = todosSlice.actions;
export default todosSlice.reducer;