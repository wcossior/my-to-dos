import { createSlice } from '@reduxjs/toolkit';

interface AppState {
    modalVisible: boolean;
}

const initialAppState: AppState = {
    modalVisible: false,
};


const deleteModalReducer = createSlice({
    name:'modal',
    initialState: initialAppState,
    reducers:{
        showModal: (state) =>{
            state.modalVisible = true;
        },
        hideModal: (state) =>{
            state.modalVisible = false;
        }
    }
});


export const { showModal, hideModal } = deleteModalReducer.actions;
export default deleteModalReducer.reducer;