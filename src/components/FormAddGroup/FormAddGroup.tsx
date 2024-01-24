import React, { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import { created, hideForm, loading } from '../../redux/slices/group';
import "./FormAddGroup.css";
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';
import { RootState } from '../../redux/store';
import { postGroupToFireStore } from '../../services/firebaseServices';

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const [groupTitle, setGroupTitle] = useState("");
    const submitState = useSelector((state: RootState) => state.group.submitState);

    const closeForm = () => {
        dispatch(hideForm());
    }

    const addGroup = async () => {
        try {
            dispatch(loading());
            await postGroupToFireStore(groupTitle);
            dispatch(created());
            setGroupTitle("");
        } catch (error) {
            console.error('Error when addding a group:', error);
        }

    }

    return (
        <div id='add-group' className='form-container'>
            {submitState === "loading" ?
                <Loading></Loading>
                :
                submitState === "created" ?
                    <ResultCard msg='Group created successfully' type="groups"></ResultCard>
                    :
                    <div className="form">
                        <p className='title-form'>ADDING A GROUP</p>
                        <div className='close-icon-container'>
                            <XmarkIcon className='xmark-icon' onClick={closeForm} />
                        </div>
                        <label>Enter a group for your todos: </label>
                        <input type="text" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} disabled={submitState !== ""} />
                        <div className='btn-container'>
                            <button className={"btn btn-green " + submitState} type="submit" onClick={addGroup} disabled={!groupTitle || submitState === "loading"}>
                                Create
                            </button>
                        </div>
                    </div>
            }

        </div>
    )
}

export default FormAddGroup
