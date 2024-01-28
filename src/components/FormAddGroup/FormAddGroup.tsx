import { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import "./FormAddGroup.css";
import ResultCard from '../ResultCard/ResultCard';
import { RootState } from '../../redux/store';
import { postGroupToFireStore } from '../../services/firebaseServices';
import { add_group, created_group, groupsOrderBy_title, hideAddGroup_form, selectA_group, whenAddingGroup_error } from '../../redux/slices/group';
import { Group } from '../../models/models';
import { nanoid } from 'nanoid';

const FormAddGroup = () => {
    const dispatch = useDispatch();

    const [groupTitle, setGroupTitle] = useState("");
    const addGroupState = useSelector((state: RootState) => state.group.addingGroup_state);
    const errorWhenAdddingGroup = useSelector((state: RootState) => state.group.addingGroup_error);
    const groups = useSelector((state: RootState) => state.group.groups);

    const closeForm = () => {
        dispatch(hideAddGroup_form());
    }

    const addGroup = async () => {
        try {
            const newGroup: Group = { customId: nanoid(), title: groupTitle.toLowerCase() };
            if (groups.length === 0) {
                dispatch(selectA_group(newGroup));
            }
            dispatch(add_group(newGroup));
            dispatch(groupsOrderBy_title());
            dispatch(created_group());
            setGroupTitle("");

            await postGroupToFireStore(newGroup);
        } catch (error) {
            dispatch(whenAddingGroup_error());
        }

    }

    return (
        <div id='add-group' className='form-container'>
            {addGroupState === "created" || errorWhenAdddingGroup ?
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
