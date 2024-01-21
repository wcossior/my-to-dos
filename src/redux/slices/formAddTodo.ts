import { createSlice } from "@reduxjs/toolkit";

interface initialFormAddTodoState {
    formVisible: boolean;
}

const initialState: initialFormAddTodoState = {
    formVisible: false
}

const formAddTodoSlice = createSlice({
    name: 'formAddTodo',
    initialState: initialState,
    reducers: {
        showFormToAddTodo: (state) => {
            state.formVisible = true;
        },
        hideFormToAddTodo: (state) => {
            state.formVisible = false;
        }
    }
});

export const {showFormToAddTodo, hideFormToAddTodo} = formAddTodoSlice.actions;
export default formAddTodoSlice.reducer;