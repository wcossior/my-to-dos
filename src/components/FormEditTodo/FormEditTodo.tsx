import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch } from 'react-redux';
import { hideFormEditTodo } from '../../redux/slices/formEditTodo';

const FormEditTodo = () => {
    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(hideFormEditTodo());
    }

    return (
        <div className='form-container'>
            <div className="form">
                <p className='title-form'>EDITING TODO</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' onClick={closeForm} />
                </div>
                <label>Update your to-do: </label>
                <input type="text" />
                <button className='btn btn-green' type="submit">Save</button>
            </div>
        </div>
    )
}

export default FormEditTodo
