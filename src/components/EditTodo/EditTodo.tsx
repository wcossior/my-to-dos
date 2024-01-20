import React from 'react';
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import "./EditTodo.css";

export default function EditTodo() {
    return (
        <div className='action-icon-container'>
            <EditIcon className='edit-icon' />
        </div>
    )
}
