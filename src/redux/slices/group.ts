import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Group } from "../../models/models";

interface initialGroupState {
    formVisible: boolean;
    submitState: string;
    groups: Group[];
    errorGroups: string;
    gettingGroupsState: string;
    groupSelectedItem: Group;
}

const initialState: initialGroupState = {
    formVisible: false,
    submitState: "",
    groups: [],
    errorGroups: "",
    gettingGroupsState: "",
    groupSelectedItem: {
        id: "",
        title: "",
    },
}

const groupSlice = createSlice({
    name: 'group',
    initialState: initialState,
    reducers: {
        showForm: (state) => {
            state.formVisible = true;
        },
        hideForm: (state) => {
            state.formVisible = false;
        },
        loading: (state) => {
            state.submitState = "loading";
        },
        created: (state) => {
            state.submitState = "created";
        },
        clean: (state) => {
            state.submitState = "";
        },
        setGroups: (state, action: PayloadAction<Group[]>) => {
            state.groups = action.payload;
            state.errorGroups = "";
            state.gettingGroupsState = "";
        },
        errorRequestGroups: (state) => {
            state.errorGroups = "Connection problems";
            state.gettingGroupsState = "";
            state.submitState = "";
        },
        gettingGroups: (state) => {
            state.gettingGroupsState = "getting";
        },
        gettingGroupsCompleted: (state) => {
            state.gettingGroupsState = "completed";
        },
        selectGroup: (state, action: PayloadAction<Group>) => {
            state.groupSelectedItem = action.payload;
        },
    }
});

export const { showForm, hideForm, loading, created, clean, setGroups, errorRequestGroups, gettingGroups, gettingGroupsCompleted, selectGroup } = groupSlice.actions;
export default groupSlice.reducer;