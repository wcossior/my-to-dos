import React from 'react';
import "./Modal.css";
import { useDispatch } from 'react-redux';
import { hideModal } from '../../redux/slices/deleteModalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    const closeModalDelete = () => {
        dispatch(hideModal());
    }

    return (
        <div className='modal-bg'>
            <div className="modal">
                <p>Are you sure to delete?</p>
                <div className="btns-container">
                    <button className='btn btn-modal-yes'>Yes</button>
                    <button className='btn btn-modal-no' onClick={closeModalDelete}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
