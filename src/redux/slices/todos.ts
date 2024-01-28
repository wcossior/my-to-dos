import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../models/models";

interface initialTodosState {
    forDeleting_idTodo: string;
    addTodo_form: boolean;
    deleteTodo_form: boolean;
    editTodo_form: boolean;
    adddingTodo_state: string;
    todos: Task[];
    todosFrom_group: Task[];
    gettingTodos_state: string;
    deletingTodo_state: string;
    gettingTodos_error: null | string;
    checkingTodo_error: null | string;
    addingTodo_error: null | string;
    deletingTodo_error: null | string;
}

const initialState: initialTodosState = {
    forDeleting_idTodo: "",
    addTodo_form: false,
    deleteTodo_form: false,
    editTodo_form: false,
    adddingTodo_state: "",
    todos: [],
    todosFrom_group: [],
    gettingTodos_state: "",
    deletingTodo_state: "",
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
        showEditTodo_form: (state) => {
            state.editTodo_form = true;
        },
        hideEditTodo_form: (state) => {
            state.editTodo_form = false;
        },
        created_todo: (state) => {
            state.adddingTodo_state = "created";
        },
        deleted_todo: (state) => {
            state.deletingTodo_state = "deleted";
            state.forDeleting_idTodo = "";
        },
        todoState_clean: (state) => {
            state.adddingTodo_state = "";
            state.deletingTodo_state = "";
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
        set_todos: (state, action: PayloadAction<Task[]>) => {
            state.todos = action.payload;
            state.gettingTodos_state = "";
        },
        setTodos_fromGroup: (state, action: PayloadAction<Task[]>) => {
            state.todosFrom_group = action.payload;
        },
        add_todo: (state, action: PayloadAction<Task>) => {
            state.todosFrom_group.push(action.payload);
            state.todos.push(action.payload);
        },
        uptade_todo: (state, action: PayloadAction<Task>) => {
            const updatedTodo = action.payload;
            state.todosFrom_group = state.todosFrom_group.map(todo =>
                todo.customId === updatedTodo.customId ? updatedTodo : todo
            );
            state.todos = state.todos.map(todo =>
                todo.customId === updatedTodo.customId ? updatedTodo : todo
            );
        },
        delete_todo: (state, action: PayloadAction<string>) => {
            const idTodoToDelete = action.payload;
            state.todosFrom_group = state.todosFrom_group.filter(todo => todo.customId !== idTodoToDelete);
            state.todos = state.todos.filter(todo => todo.customId !== idTodoToDelete);
        },
        todosOrderBy_NoCompleted: (state) => {
            const todosOrdered = state.todosFrom_group.slice().sort((a, b) => {
                return a.todoCompleted === b.todoCompleted ? 0 : a.todoCompleted ? 1 : -1;
            });
            state.todosFrom_group = todosOrdered;
        },
        getTodosfrom_group: (state, action: PayloadAction<string>) => {
            const idGroup = action.payload;
            const todosFromSpecificGroup = state.todos.filter(todo => todo.idGroup === idGroup);
            state.todosFrom_group = todosFromSpecificGroup;
        },
        idTodoForDeleleting_set: (state, action: PayloadAction<string>) => {
            state.forDeleting_idTodo = action.payload;
        },
        whenGettingTodos_error: (state) => {
            state.gettingTodos_error = "Error when getting todos";
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
    showEditTodo_form,
    hideEditTodo_form,
    created_todo,
    deleted_todo,
    todoState_clean,
    getting_todos,
    gettingTodos_completed,
    set_todos,
    add_todo,
    uptade_todo,
    delete_todo,
    todosOrderBy_NoCompleted,
    getTodosfrom_group,
    whenGettingTodos_error,
    whenAddingTodo_error,
    whenDeletingTodo_error,
    whenCheckingTodo_error,
    idTodoForDeleleting_set,
} = todosSlice.actions;
export default todosSlice.reducer;