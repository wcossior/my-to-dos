import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { addingTodoState_clean, getting_todos, gettingTodos_completed, hideDeleteTodo_form, todos_set, whenGettingTodos_error } from '../../redux/slices/todos';
import { cleanDeleteState } from '../../redux/slices/deleteModal';
import { RootState } from '../../redux/store';
import { addingGroupState_clean, gettingGroups_completed, getting_groups, groups_set, whenGettingGroups_error } from '../../redux/slices/group';

const ResultCard = ({ msg, type, errorMsg }: { msg: string, type: string, errorMsg: string | null }) => {

    const groupSelected = useSelector((state: RootState) => state.group.group_selected);

    const dispatch = useDispatch();

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

    const getTodos = async () => {
        try {
            dispatch(getting_todos());
            const todos = await getTodosFromFirestore(groupSelected.id);
            dispatch(todos_set(todos));
            dispatch(gettingTodos_completed());
        } catch (error) {
            dispatch(whenGettingTodos_error());
        }
    };

    const chooseType = () => {

        switch (type) {
            case "groups":
                getGroups();
                dispatch(addingGroupState_clean());
                break;

            case "todos":
                getTodos();
                dispatch(addingTodoState_clean());
                dispatch(cleanDeleteState());
                dispatch(hideDeleteTodo_form());
                break;
        }
    }

    return (
        <div className={`result-card-container ${errorMsg ? "error" : "success"}`}>
            <CheckIcon className='check-icon' />
            <p>{errorMsg ? errorMsg : msg}</p>
            <button className='btn btn-blank' onClick={chooseType}>Ok</button>
        </div>
    )
}

export default ResultCard
