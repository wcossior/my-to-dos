import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DeleteModalState {
    modalVisible: boolean;
    idTodo: string;
}

const initialState: DeleteModalState = {
    modalVisible: false,
    idTodo: "",
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
        }
    }
});

export const { showModal, hideModal, saveIdTodo } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;