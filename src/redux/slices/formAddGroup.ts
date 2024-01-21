import { createSlice } from "@reduxjs/toolkit";

interface initialFormAddGroupState {
    formVisible: boolean;
}

const initialState: initialFormAddGroupState = {
    formVisible: false,
}

const formAddGroupSlice = createSlice({
    name: 'formAddGroup',
    initialState: initialState,
    reducers: {
        showForm: (state) => {
            state.formVisible = true;
        },
        hideForm: (state) => {
            state.formVisible = false;
        }
    }
});

export const { showForm, hideForm} = formAddGroupSlice.actions;
export default formAddGroupSlice.reducer;