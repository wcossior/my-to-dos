import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./DeleteTodo.css";
import { saveIdTodo } from '../../redux/slices/deleteModal';
import { useDispatch } from 'react-redux';
import { showDeleteTodo_form } from "../../redux/slices/todos";

export default function DeleteTodo({ todoId }: { todoId: string }) {
    const dispatch = useDispatch();

    const showModalDelete = () => {
        dispatch(showDeleteTodo_form());
        dispatch(saveIdTodo(todoId));
    }

    return (
        <div className='action-icon-container' onClick={showModalDelete}>
            <XmarkIcon className='xmark-icon' />
        </div>
    )
}
