import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import "./DeleteTodo.css";
import { saveIdTodo, showModal } from '../../redux/slices/deleteModal';
import { useDispatch } from 'react-redux';

export default function DeleteTodo({ todoId }: { todoId: string }) {
    const dispatch = useDispatch();

    const showModalDelete = () => {
        dispatch(showModal());
        dispatch(saveIdTodo(todoId));
    }

    return (
        <div className='action-icon-container' onClick={showModalDelete}>
            <XmarkIcon className='xmark-icon' />
        </div>
    )
}
