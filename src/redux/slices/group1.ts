import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Group } from "../../models/models";

interface initialGroupState {
    addGroup_form: boolean;
    addingGroup_state: string;
    groups: Group[];
    gettingGroups_state: string;
    group_selected: Group;
    gettingGroups_error: null | string;
    addingGroup_error: null | string;
    deletingGroup_error: null | string;
}

const initialState: initialGroupState = {
    addGroup_form: false,
    addingGroup_state: "",
    groups: [],
    gettingGroups_state: "",
    group_selected: {
        id: "",
        title: "",
    },
    gettingGroups_error: null,
    addingGroup_error: null,
    deletingGroup_error: null,
}


const groupSlice = createSlice({
    name: "group1",
    initialState: initialState,
    reducers: {
        showAddGroup_form: (state) => {
            state.addGroup_form = true;
        },
        hideAddGroup_form: (state) => {
            state.addGroup_form = false;
        },
        creating_group: (state) => {
            state.addingGroup_state = "creating";
        },
        created_group: (state) => {
            state.addingGroup_state = "created";
        },
        addingGroupState_clean: (state) => {
            state.addingGroup_state = "";
        },
        getting_groups: (state) => {
            state.gettingGroups_state = "getting";
        },
        gettingGroups_completed: (state) => {
            state.gettingGroups_state = "completed";
        },
        groups_set: (state, action: PayloadAction<Group[]>) => {
            state.groups = action.payload;
            // state.errorGroups = "";
            state.gettingGroups_state = "";
        },
        selectA_group: (state, action: PayloadAction<Group>) => {
            state.group_selected = action.payload;
        },
    }
});

export const {
    showAddGroup_form,
    hideAddGroup_form,
    creating_group,
    created_group,
    addingGroupState_clean,
    getting_groups,
    gettingGroups_completed,
    groups_set,
    selectA_group
} = groupSlice.actions;

export default groupSlice.reducer;