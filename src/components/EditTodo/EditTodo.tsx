import React from 'react';
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import "./EditTodo.css";
import { useDispatch } from 'react-redux';
import { showEditTodo_form } from '../../redux/slices/todos';


export default function EditTodo() {
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(showEditTodo_form());
    }

    return (
        <div className='action-icon-container' onClick={showForm}>
            <EditIcon className='edit-icon' />
        </div>
    )
}
