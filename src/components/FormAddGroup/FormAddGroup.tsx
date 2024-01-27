import React, { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import "./FormAddGroup.css";
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';
import { RootState } from '../../redux/store';
import { postGroupToFireStore } from '../../services/firebaseServices';
import { created_group, creating_group, hideAddGroup_form, whenAddingGroup_error } from '../../redux/slices/group';

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const [groupTitle, setGroupTitle] = useState("");
    const addGroupState = useSelector((state: RootState) => state.group.addingGroup_state);
    const errorWhenAdddingGroup = useSelector((state: RootState) => state.group.addingGroup_error);

    const closeForm = () => {
        dispatch(hideAddGroup_form());
    }

    const addGroup = async () => {
        try {
            dispatch(creating_group());
            await postGroupToFireStore(groupTitle.toUpperCase());
            dispatch(created_group());
            setGroupTitle("");
        } catch (error) {
            dispatch(whenAddingGroup_error());
        }

    }

    return (
        <div id='add-group' className='form-container'>
            {addGroupState === "creating" ?
                <Loading></Loading>
                :
                addGroupState === "created" || errorWhenAdddingGroup ?
                    <ResultCard errorMsg={errorWhenAdddingGroup} msg='Group created successfully' type="groups"></ResultCard>
                    :
                    <div className="form">
                        <p className='title-form'>ADDING A GROUP</p>
                        <div className='close-icon-container'>
                            <XmarkIcon className='xmark-icon' onClick={closeForm} />
                        </div>
                        <label>Enter a group for your todos: </label>
                        <input type="text" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} disabled={addGroupState !== ""} />
                        <div className='btn-container'>
                            <button className={"btn btn-green " + addGroupState} type="submit" onClick={addGroup} disabled={!groupTitle || addGroupState === "loading"}>
                                Create
                            </button>
                        </div>
                    </div>
            }

        </div>
    )
}

export default FormAddGroup
