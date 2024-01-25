import React, { useEffect } from 'react'
import addIcon from "../../assets/add.svg";
import "./GroupSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { gettingGroupsCompleted, selectGroup, showForm } from '../../redux/slices/group';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import { errorGettingGroups, setGroups, gettingGroups } from '../../redux/slices/group';
import { errorGettingTodos, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';
import { Group } from '../../models/models';

const GroupSection = () => {
    const arrayGroups = useSelector((state: RootState) => state.group.groups);
    const groupSelected = useSelector((state: RootState) => state.group.groupSelectedItem);
    const gettingState = useSelector((state: RootState) => state.group.gettingGroupsState);

    const dispatch = useDispatch();

    const showFormModal = () => {
        dispatch(showForm());
    }

    useEffect(() => {
        const getGroups = async () => {
            try {
                dispatch(gettingGroups());
                const groups = await getGroupsFromFirestore();
                dispatch(setGroups(groups));
                dispatch(gettingGroupsCompleted());
            } catch (error) {
                dispatch(errorGettingGroups());
            }
        };

        getGroups();
    }, []);

    const selectAGroup = async (group: Group) => {
        try {
            dispatch(selectGroup(group));
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore(group.id);
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorGettingTodos());
        }

    }

    return (
        <div className='groups'>
            <div className='btn-add-a-group'>
                <h1>Groups</h1>
                <img className='add-a-group' src={addIcon} alt="add a group icon" onClick={showFormModal} />
            </div>
            {gettingState === "getting" ?
                <div className='loading-container'>
                    <div className='circle'>
                        <div className='circular-loading'></div>
                    </div>
                    <p>Getting groups</p>
                </div>
                : gettingState === "completed" && arrayGroups.length === 0 ? (
                    <p>No hay grupos</p>
                )
                    : gettingState === "completed" ? (
                        arrayGroups.map((group) => (
                            <div key={group.id} onClick={() => selectAGroup(group)} className={`title-group-container ${group.id === groupSelected.id ? 'selected' : ''}`}>
                                <p>{group.title}</p>
                            </div>
                        )))
                        :
                        (
                            <p>The groups could not be obtained</p>
                        )

            }

        </div>
    )
}

export default GroupSection;
