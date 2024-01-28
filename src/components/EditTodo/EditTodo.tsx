import React from 'react';
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import "./EditTodo.css";
import { useDispatch } from 'react-redux';
import { setTodo_forEdit, showEditTodo_form } from '../../redux/slices/todos';
import { Task } from '../../models/models';


export default function EditTodo({ todo }: { todo: Task }) {
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(showEditTodo_form());
        dispatch(setTodo_forEdit(todo));
    }

    return (
        <div className='action-icon-container' onClick={showForm}>
            <EditIcon className='edit-icon' />
        </div>
    )
}
