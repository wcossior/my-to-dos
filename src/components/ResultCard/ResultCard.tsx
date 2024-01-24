import React from 'react';
import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch } from 'react-redux';
import { clean as cleanGroups, errorGettingGroups, gettingGroups, gettingGroupsCompleted, setGroups } from '../../redux/slices/group';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { clean as cleanTodos, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';

const ResultCard = ({ msg, type }: { msg: string, type: string }) => {

    const dispatch = useDispatch();

    const getGroups = async () => {
        try {
            dispatch(gettingGroups());
            const groups = await getGroupsFromFirestore();
            dispatch(setGroups(groups));
            dispatch(gettingGroupsCompleted());
        } catch (error) {
            dispatch(errorGettingGroups());
        }
    };

    const getTodos = async () => {
        try {
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore();
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorGettingGroups());
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
                break;
        }
    }

    return (
        <div className='result-card-container'>
            <CheckIcon className='check-icon' />
            <p>{msg}</p>
            <button className='btn btn-blank' onClick={chooseType}>Ok</button>
        </div>
    )
}

export default ResultCard
