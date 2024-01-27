import React from 'react';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import "./CheckTodo.css";
import { checkTodoToFireStore, getTodosFromFirestore } from '../../services/firebaseServices';
import { getting_todos, gettingTodos_completed, todos_set, whenCheckingTodo_error, whenGettingTodos_error } from '../../redux/slices/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../../models/models';
import { RootState } from '../../redux/store';

export default function CheckTodo({ todo }: { todo: Task }) {
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const dispatch = useDispatch();

    async function todoCompleted() {
        try {
            await checkTodoToFireStore(todo.id, !todo.todoCompleted);
            getTodos();
        } catch (error) {
            dispatch(whenCheckingTodo_error());
        }
    }

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
