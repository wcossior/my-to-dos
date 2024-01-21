import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./DeleteTodo.css";
import { showModal } from '../../redux/slices/deleteModal';
import { useDispatch } from 'react-redux';

export default function DeleteTodo() {
    const dispatch = useDispatch();

    const showModalDelete = () => {
        dispatch(showModal());
    }

    return (
        <div className='action-icon-container' onClick={showModalDelete}>
            <XmarkIcon className='xmark-icon'/>
        </div>
    )
}
