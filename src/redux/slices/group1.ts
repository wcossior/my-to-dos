import { createSlice } from "@reduxjs/toolkit"
import { Group } from "../../models/models";

interface initialGroupState {
    addGroup_form: boolean;
    addingGroup_state: string;
    groups: Group[];
    gettingGroups_state: string;
    group_selected: null | Group;
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
    name: "group1",
    initialState: initialState,
    reducers: {
        showAddGroup_form: (state) => {
            state.addGroup_form = true;
        },
        hideAddGroup_form: (state) => {
            state.addGroup_form = false;
        },
    }
});

export const {
    showAddGroup_form,
    hideAddGroup_form,
} = groupSlice.actions;

export default groupSlice.reducer;