import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsFromFirestore, getTodosFromFirestore } from '../../services/firebaseServices';
import { clean as cleanTodos, errorRequestTodo, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';
import { cleanDeleteState, hideModal } from '../../redux/slices/deleteModal';
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
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore(groupSelected.id);
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorRequestTodo());
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
                dispatch(cleanTodos());
                dispatch(cleanDeleteState());
                dispatch(hideModal());
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
