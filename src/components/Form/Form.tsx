import React from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./Form.css";

const Form = () => {
    return (
        <div className='form-container'>
            <div className="form">
                <p className='title-form'>ADDING A TODO</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' />
                </div>
                <label>Enter a todo: </label>
                <input type="text" />
                <button className='btn btn-save' type="submit">Save</button>
            </div>
        </div>
    )
}

export default Form
