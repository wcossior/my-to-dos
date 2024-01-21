import { createSlice } from '@reduxjs/toolkit';

interface DeleteModalState {
    modalVisible: boolean;
}

const initialState: DeleteModalState = {
    modalVisible: false,
};


const deleteModalSlice = createSlice({
    name:'modalDelete',
    initialState: initialState,
    reducers:{
        showModal: (state) =>{
            state.modalVisible = true;
        },
        hideModal: (state) =>{
            state.modalVisible = false;
        }
    }
});

export const { showModal, hideModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;