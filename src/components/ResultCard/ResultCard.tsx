import React from 'react';
import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch, useSelector } from 'react-redux';
import { clean as cleanGroups, errorRequestGroups, gettingGroups, gettingGroupsCompleted, setGroups } from '../../redux/slices/group';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { clean as cleanTodos, errorRequestTodo, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';
import { cleanDeleteState, hideModal } from '../../redux/slices/deleteModal';
import { RootState } from '../../redux/store';

const ResultCard = ({ msg, type, errorMsg }: { msg: string, type: string, errorMsg: string }) => {

    const fistGroup = useSelector((state: RootState) => state.group.groupSelectedItem);

    const dispatch = useDispatch();

    const getGroups = async () => {
        try {
            dispatch(gettingGroups());
            const groups = await getGroupsFromFirestore();
            dispatch(setGroups(groups));
            dispatch(gettingGroupsCompleted());
        } catch (error) {
            dispatch(errorRequestGroups());
        }
    };

    const getTodos = async () => {
        try {
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore(fistGroup.id);
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorRequestTodo());
        }
    };

    const chooseType = () => {
        
        switch (type) {
            case "groups":
                getGroups();
                dispatch(cleanGroups());
                break;

            case "todos":
                getTodos();
                dispatch(cleanTodos());
                dispatch(cleanDeleteState());
                dispatch(hideModal());
                break;
        }
    }

    return (
        <div className={`result-card-container ${errorMsg ? "error" : "success"}`}>
            <CheckIcon className='check-icon' />
            <p>{errorMsg ? errorMsg : msg}</p>
            <button className='btn btn-blank' onClick={chooseType}>Ok</button>
        </div>
    )
}

export default ResultCard
