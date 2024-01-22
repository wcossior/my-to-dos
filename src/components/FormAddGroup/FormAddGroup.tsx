import React, { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch } from 'react-redux';
import { hideForm } from '../../redux/slices/formAddGroup';
import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const [groupTitle, setGroupTitle] = useState("");

    const closeForm = () => {
        dispatch(hideForm());
    }

    const addGroup = async () => {
        try {
            const groupsCollection = collection(db, 'groups');
            const newGroup = { title: groupTitle };

            await addDoc(groupsCollection, newGroup);
            closeForm();
        } catch (error) {
            console.error('Error when addding a group:', error);
        }
    }

    return (
        <div className='form-container'>
            <div className="form">
                <p className='title-form'>ADDING A GROUP</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' onClick={closeForm} />
                </div>
                <label>Enter a group for your to-dos: </label>
                <input type="text" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} />
                <button className='btn btn-green' type="submit" onClick={addGroup}>Save</button>
            </div>
        </div>
    )
}

export default FormAddGroup
