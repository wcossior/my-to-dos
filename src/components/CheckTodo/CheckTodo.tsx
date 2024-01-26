import React from 'react';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import "./CheckTodo.css";
import { checkTodoToFireStore, getTodosFromFirestore } from '../../services/firebaseServices';
import { errorRequestTodo, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../../models/models';
import { RootState } from '../../redux/store';

export default function CheckTodo({ todo }: { todo: Task }) {
    const fistGroup = useSelector((state: RootState) => state.group.groupSelectedItem);
    const dispatch = useDispatch();

    async function todoCompleted() {
        try {
            await checkTodoToFireStore(todo.id, !todo.todoCompleted);
            getTodos();
        } catch (error) {
            dispatch(errorRequestTodo());
        }
    }

    const getTodos = async () => {
        try {
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore(fistGroup.id);
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorRequestTodo());
        }
    };

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
