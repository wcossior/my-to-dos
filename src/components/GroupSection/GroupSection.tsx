import addIcon from "../../assets/add.svg";
import "./GroupSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { gettingTodos_completed, getTodosfrom_group, todosOrderBy_NoCompleted, whenGettingTodos_error } from '../../redux/slices/todos';
import { Group } from '../../models/models';
import { selectA_group, showAddGroup_form } from '../../redux/slices/group';

const GroupSection = () => {
    const arrayGroups = useSelector((state: RootState) => state.group.groups);
    const errorWhenGettingGroups = useSelector((state: RootState) => state.group.gettingGroups_error);
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const gettingState = useSelector((state: RootState) => state.group.gettingGroups_state);

    const dispatch = useDispatch();

    const showFormModal = () => {
        dispatch(showAddGroup_form());
    }

    const selectAGroup = async (group: Group) => {
        dispatch(selectA_group(group));
        dispatch(getTodosfrom_group(group.customId));
        dispatch(todosOrderBy_NoCompleted());
        // dispatch(gettingTodos_completed());
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
                    : gettingState === "completed" && groupSelected ? (
                        arrayGroups.map((group) => (
                            <div key={group.customId} onClick={() => selectAGroup(group)} className={`title-group-container ${group.customId === groupSelected.customId ? 'selected' : ''}`}>
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
