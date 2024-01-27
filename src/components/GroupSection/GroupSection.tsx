import { useEffect } from 'react'
import addIcon from "../../assets/add.svg";
import "./GroupSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import { getting_todos, gettingTodos_completed, todos_set, whenGettingTodos_error } from '../../redux/slices/todos';
import { Group } from '../../models/models';
import { gettingGroups_completed, getting_groups, groups_set, selectA_group, showAddGroup_form, whenGettingGroups_error } from '../../redux/slices/group';

const GroupSection = () => {
    const arrayGroups = useSelector((state: RootState) => state.group.groups);
    const errorWhenGettingGroups = useSelector((state: RootState) => state.group.gettingGroups_error);
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const gettingState = useSelector((state: RootState) => state.group.gettingGroups_state);

    const dispatch = useDispatch();

    const showFormModal = () => {
        dispatch(showAddGroup_form());
    }

    useEffect(() => {
        const getGroups = async () => {
            try {
                dispatch(getting_groups());
                const groups = await getGroupsFromFirestore();
                dispatch(groups_set(groups));
                dispatch(gettingGroups_completed());
                
            } catch (error) {
                dispatch(whenGettingGroups_error());
            }
        };

        getGroups();
    }, []);

    const selectAGroup = async (group: Group) => {
        try {
            dispatch(selectA_group(group));
            dispatch(getting_todos());
            const todos = await getTodosFromFirestore(group.id);
            dispatch(todos_set(todos));
            dispatch(gettingTodos_completed());
        } catch (error) {
            dispatch(whenGettingTodos_error());
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
                            <p>{errorWhenGettingGroups}</p>
                        )

            }

        </div>
    )
}

export default GroupSection;
