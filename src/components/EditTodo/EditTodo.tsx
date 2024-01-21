import React from 'react';
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import "./EditTodo.css";
import { useDispatch } from 'react-redux';
import { showFormEditTodo } from '../../redux/slices/formEditTodo';


export default function EditTodo() {
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(showFormEditTodo());
    }

    return (
        <div className='action-icon-container' onClick={showForm}>
            <EditIcon className='edit-icon' />
        </div>
    )
}
