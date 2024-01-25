import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Group } from "../../models/models";

interface initialGroupState {
    formVisible: boolean;
    submitState: string;
    groups: Group[];
    errorWhenGettingGroups: string;
    gettingGroupsState: string;
    groupSelectedItem: Group;
}

const initialState: initialGroupState = {
    formVisible: false,
    submitState: "",
    groups: [],
    errorWhenGettingGroups: "",
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
            state.errorWhenGettingGroups = "";
            state.gettingGroupsState = "";
        },
        errorGettingGroups: (state) => {
            state.errorWhenGettingGroups = "Error when getting groups";
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

export const { showForm, hideForm, loading, created, clean, setGroups, errorGettingGroups, gettingGroups, gettingGroupsCompleted, selectGroup } = groupSlice.actions;
export default groupSlice.reducer;