import React, { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch } from 'react-redux';
import { hideForm } from '../../redux/slices/formAddGroup';
import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import "./FormAddGroup.css";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const [groupTitle, setGroupTitle] = useState("");
    const [submitState, setSubmitState] = useState("");

    const closeForm = () => {
        dispatch(hideForm());
    }

    const addGroup = async () => {
        try {
            const groupsCollection = collection(db, 'groups');
            const newGroup = { title: groupTitle };

            setSubmitState("saving");
            await addDoc(groupsCollection, newGroup);
            setSubmitState("saved");
        } catch (error) {
            console.error('Error when addding a group:', error);
        }

    }

    return (
        <div id='add-group' className='form-container'>
            <div className="form">
                <p className='title-form'>ADDING A GROUP</p>
                <div className='close-icon-container'>
                    <XmarkIcon className='xmark-icon' onClick={closeForm} />
                </div>
                <label>Enter a group for your to-dos: </label>
                <input type="text" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} disabled={submitState!==""}/>
                <div className='btn-container'>
                    <button className={"btn btn-green " + submitState} type="submit" onClick={addGroup} disabled={!groupTitle || submitState === "saving"}>
                        {
                            submitState === "saving"
                                ? "Saving"
                                : submitState === "saved" ?
                                    <div className='saved-confirmation'>
                                        <CheckIcon className='check-icon' />
                                        <p>Saved</p>
                                    </div>
                                    : "Save"
                        }
                    </button>
                    {submitState === "saving" &&
                        <div>
                            <div className='line-bottom-btn'></div>
                            <div className='line-btn'></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FormAddGroup
