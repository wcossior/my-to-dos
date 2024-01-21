import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./FormAddGroup.css";
import { useDispatch } from 'react-redux';
import { hideForm } from '../../redux/slices/formAddGroup';

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(hideForm());
    }

    return (
        <div className='form-container'>
            <div className="form-add-group">
                <p className='title-form'>ADDING A GROUP</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' onClick={closeForm} />
                </div>
                <label>Enter a group for your to-dos: </label>
                <input type="text" />
                <button className='btn btn-green' type="submit">Save</button>
            </div>
        </div>
    )
}

export default FormAddGroup
