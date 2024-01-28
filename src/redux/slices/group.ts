import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Group } from "../../models/models";

interface initialGroupState {
    addGroup_form: boolean;
    addingGroup_state: string;
    groups: Group[];
    gettingGroups_state: string;
    group_selected: Group | null;
    gettingGroups_error: null | string;
    addingGroup_error: null | string;
    deletingGroup_error: null | string;
}

const initialState: initialGroupState = {
    addGroup_form: false,
    addingGroup_state: "",
    groups: [],
    gettingGroups_state: "",
    group_selected: null,
    gettingGroups_error: null,
    addingGroup_error: null,
    deletingGroup_error: null,
}


const groupSlice = createSlice({
    name: "group",
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
            state.addingGroup_error = null
        },
        groupState_clean: (state) => {
            state.addingGroup_state = "";
            state.addingGroup_error = null;
            state.gettingGroups_error = null;
            state.deletingGroup_error = null;
        },
        getting_groups: (state) => {
            state.gettingGroups_state = "getting";
        },
        gettingGroups_completed: (state) => {
            state.gettingGroups_state = "completed";
        },
        set_groups: (state, action: PayloadAction<Group[]>) => {
            state.groups = action.payload;
            state.gettingGroups_error = null;
            state.gettingGroups_state = "";
        },
        selectA_group: (state, action: PayloadAction<Group>) => {
            state.group_selected = action.payload;
        },
        add_group: (state, action: PayloadAction<Group>) => {
            state.groups.push(action.payload);
        },
        groupsOrderBy_title: (state) => {
            const groupsOrdered = state.groups.slice().sort((a, b) => a.title.localeCompare(b.title));
            state.groups = groupsOrdered;
        },
        whenGettingGroups_error: (state) => {
            state.gettingGroups_error = "Error when getting groups";
        },
        whenAddingGroup_error: (state) => {
            state.addingGroup_error = "Error when adding a group";
        },
        whenDeletingGroup_error: (state) => {
            state.deletingGroup_error = "Error when deleting a group";
        },
    }
});

export const {
    showAddGroup_form,
    hideAddGroup_form,
    created_group,
    groupState_clean,
    getting_groups,
    gettingGroups_completed,
    set_groups,
    add_group,
    groupsOrderBy_title,
    selectA_group,
    whenGettingGroups_error,
    whenAddingGroup_error,
    whenDeletingGroup_error,
} = groupSlice.actions;

export default groupSlice.reducer;