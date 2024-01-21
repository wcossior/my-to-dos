import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch } from 'react-redux';
import { hideFormToAddTodo } from '../../redux/slices/formAddTodo';

const FormAddTodo = () => {
    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(hideFormToAddTodo());
    }

    return (
        <div className='form-container'>
            <div className="form">
                <p className='title-form'>ADDING A TODO</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' onClick={closeForm} />
                </div>
                <label>Add a to-do to your group: </label>
                <input type="text" />
                <button className='btn btn-green' type="submit">Save</button>
            </div>
        </div>
    )
}

export default FormAddTodo
