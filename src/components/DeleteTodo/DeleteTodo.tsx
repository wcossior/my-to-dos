import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./DeleteTodo.css";
import { useDispatch } from 'react-redux';
import { idTodoForDeleleting_set, showDeleteTodo_form } from "../../redux/slices/todos";

export default function DeleteTodo({ todoId }: { todoId: string }) {
    const dispatch = useDispatch();

    const showModalDelete = () => {
        dispatch(showDeleteTodo_form());
        dispatch(idTodoForDeleleting_set(todoId));
    }

    return (
        <div className='action-icon-container' onClick={showModalDelete}>
            <XmarkIcon className='xmark-icon' />
        </div>
    )
}
