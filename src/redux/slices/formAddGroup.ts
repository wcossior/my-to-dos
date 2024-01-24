import { createSlice } from "@reduxjs/toolkit";

interface initialFormAddGroupState {
    formVisible: boolean;
    submitState: string;
}

const initialState: initialFormAddGroupState = {
    formVisible: false,
    submitState: ""
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
        },
        loading: (state) =>{
            state.submitState = "loading";
        },
        created: (state) =>{
            state.submitState = "created";
        },
        clean:(state)=>{
            state.submitState = "";
        }
    }
});

export const { showForm, hideForm, loading, created, clean} = formAddGroupSlice.actions;
export default formAddGroupSlice.reducer;