import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DeleteModalState {
    modalVisible: boolean;
    idTodo: string;
    errorWhenDeletingTodo: string;
    deletingState: string;
}

const initialState: DeleteModalState = {
    modalVisible: false,
    idTodo: "",
    errorWhenDeletingTodo: "",
    deletingState: "",
};


const deleteModalSlice = createSlice({
    name: 'modalDelete',
    initialState: initialState,
    reducers: {
        showModal: (state) => {
            state.modalVisible = true;
        },
        hideModal: (state) => {
            state.modalVisible = false;
        },
        saveIdTodo: (state, action: PayloadAction<string>) => {
            state.idTodo = action.payload;
        },
        loading: (state) => {
            state.deletingState = "loading";
        },
        deleted: (state) => {
            state.deletingState = "deleted";
            state.errorWhenDeletingTodo = "";
            state.idTodo = "";
        },
        cleanDeleteState: (state) => {
            state.deletingState = "";
            state.errorWhenDeletingTodo = "";
        },
        errorDeletingTodo: (state) => {
            state.errorWhenDeletingTodo = "Conneciton problems";
            state.deletingState = "";
        },
    }
});

export const {  saveIdTodo, loading, deleted, cleanDeleteState, errorDeletingTodo } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;