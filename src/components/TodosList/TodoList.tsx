import { useEffect } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { errorGettingTodos, gettingTodos, gettingTodosCompleted, setTodos } from "../../redux/slices/todo";
import { getTodosFromFirestore } from "../../services/firebaseServices";
import { RootState } from "../../redux/store";

export default function TodoList() {

    const dispatch = useDispatch();

    const arrayTodos = useSelector((state: RootState) => state.todo.todos);


    useEffect(() => {
        const getTodos = async () => {
            try {
                dispatch(gettingTodos());
                const todos = await getTodosFromFirestore();
                dispatch(setTodos(todos));
                dispatch(gettingTodosCompleted());
            } catch (error) {
                dispatch(errorGettingTodos());
            }
        };

        getTodos();
    }, []);

    return (
        <div className='to-dos-container'>
            <div className="center">
            {arrayTodos.map(todo => (
                    <Todo key={todo.id} todo={todo}></Todo>
                ))}
            </div>
        </div>
    )
}
