import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import "./CheckTodo.css";
import { editTodoToFireStore } from '../../services/firebaseServices';
import { todosOrderBy_NoCompleted, edit_todo, whenCheckingTodo_error } from '../../redux/slices/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../../models/models';
import { RootState } from '../../redux/store';

export default function CheckTodo({ todo }: { todo: Task }) {
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const dispatch = useDispatch();

    async function todoCompleted() {
        try {
            if (groupSelected) {
                const newTodo: Task ={
                    ...todo,
                    todoCompleted: !todo.todoCompleted
                };
                dispatch(edit_todo(newTodo));
                dispatch(todosOrderBy_NoCompleted());
                await editTodoToFireStore(newTodo);
            } else {
                dispatch(whenCheckingTodo_error());
            }
        } catch (error) {
            dispatch(whenCheckingTodo_error());
        }
    }

    return (
        <div
            style={{
                backgroundColor: todo.todoCompleted ? "#4CAF50" : "white",
                transition: "backgroundColor 1s ease"
            }}
            onClick={todoCompleted}
            className='action-icon-container completed-to-do margin-left-auto'
        >
            <CheckIcon
                style={{
                    fill: todo.todoCompleted ? "white" : "#4CAF50",
                    transition: "fill 1s ease",
                }}
                className='check-icon'
            />
        </div>
    )
}
