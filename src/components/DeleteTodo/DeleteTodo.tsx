import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./DeleteTodo.css";

export default function DeleteTodo() {
    return (
        <div className='action-icon-container'>
            <XmarkIcon className='xmark-icon' />
        </div>
    )
}
