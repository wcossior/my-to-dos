import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../models/models";

interface initialTodosState {
    addTodo_form: boolean;
    deleteTodo_form: boolean;
    adddingTodo_state: string;
    todos: Task[];
    gettingTodos_state: string;
    deletingTodo_state: string;
    errorTodo: string;
    gettingTodos_error: null | string;
    checkingTodo_error: null | string;
    addingTodo_error: null | string;
    deletingTodo_error: null | string;
}

const initialState: initialTodosState = {
    addTodo_form: false,
    deleteTodo_form: false,
    adddingTodo_state: "",
    todos: [],
    gettingTodos_state: "",
    deletingTodo_state: "",
    errorTodo: "",
    gettingTodos_error: null,
    checkingTodo_error: null,
    addingTodo_error: null,
    deletingTodo_error: null,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        showAddTodo_form: (state) => {
            state.addTodo_form = true;
        },
        hideAddTodo_form: (state) => {
            state.addTodo_form = false;
        },
        showDeleteTodo_form: (state) => {
            state.deleteTodo_form = true;
        },
        hideDeleteTodo_form: (state) => {
            state.deleteTodo_form = false;
        },
        creating_todo: (state) => {
            state.adddingTodo_state = "loading";
        },
        created_todo: (state) => {
            state.adddingTodo_state = "created";
        },
        addingTodoState_clean: (state) => {
            state.adddingTodo_state = "";
            state.addingTodo_error = null;
            state.gettingTodos_error = null;
            state.deletingTodo_error = null;
            state.checkingTodo_error = null;
        },
        getting_todos: (state) => {
            state.gettingTodos_state = "getting";
        },
        gettingTodos_completed: (state) => {
            state.gettingTodos_state = "completed";
        },
        todos_set: (state, action: PayloadAction<Task[]>) => {
            state.todos = action.payload;
            state.errorTodo = "";
            state.gettingTodos_state = "";
        },
        errorRequestTodo: (state) => {
            state.errorTodo = "Connection problems";
            state.gettingTodos_state = "";
            state.adddingTodo_state = "";
        },



        whenGettingTodos_error: (state) => {
            state.gettingTodos_error = "Error when getting todos";
            state.gettingTodos_state = "";
        },
        whenCheckingTodo_error: (state) => {
            state.checkingTodo_error = "Error when checking todos";
        },
        whenAddingTodo_error: (state) => {
            state.addingTodo_error = "Error when adding a todo";
        },
        whenDeletingTodo_error: (state) => {
            state.deletingTodo_error = "Error when deleting a todo";
        },
    }
});

export const {
    showAddTodo_form,
    hideAddTodo_form,
    showDeleteTodo_form,
    hideDeleteTodo_form,
    creating_todo,
    created_todo,
    addingTodoState_clean,
    getting_todos,
    gettingTodos_completed,
    todos_set,
    whenGettingTodos_error,
    whenAddingTodo_error,
    whenDeletingTodo_error,
    whenCheckingTodo_error,
} = todosSlice.actions;
export default todosSlice.reducer;