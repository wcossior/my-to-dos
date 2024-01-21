import React from 'react';
import "./InfoModal.css";

const InfoModal = () => {
    return (
        <div className='modal-bg'>
            <div className="modal">
                <p>Are you sure to delete?</p>
                <div className="btns-container">
                    <button className='btn btn-modal-yes'>Yes</button>
                    <button className='btn btn-modal-no'>No</button>
                </div>
            </div>
        </div>
    )
}

export default InfoModal
