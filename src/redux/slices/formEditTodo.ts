import { createSlice } from "@reduxjs/toolkit";

interface initialFormEditTodoState{
    formVisible:boolean;
}

const initialState:initialFormEditTodoState = {
    formVisible:false,
}

const formEditTodoSlice = createSlice({
    name: 'formEditTodo',
    initialState: initialState,
    reducers:{
        showFormEditTodo: (state) =>{
            state.formVisible = true;
        },
        hideFormEditTodo: (state) =>{
            state.formVisible = false;
        },
    }
});

export const {showFormEditTodo, hideFormEditTodo} = formEditTodoSlice.actions;
export default formEditTodoSlice.reducer;