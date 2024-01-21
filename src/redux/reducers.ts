import { combineReducers } from '@reduxjs/toolkit';

interface AppState {
    modalVisible: boolean;
}

const initialAppState: AppState = {
    modalVisible: false,
};

interface ShowModalAction {
    type: 'SHOW_MODAL';
};

interface HideModalAction {
    type: 'HIDE_MODAL';
};

type DeleteModalAction =
    | ShowModalAction
    | HideModalAction;

const deleteModalReducer = (state = initialAppState.modalVisible, action: DeleteModalAction) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return true;
        case 'HIDE_MODAL':
            return false;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    modalVisible: deleteModalReducer,
});

export default rootReducer;
