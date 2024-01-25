import { useEffect } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { errorGettingTodos, gettingTodos, gettingTodosCompleted, setTodos } from "../../redux/slices/todos";
import { getTodosFromFirestore } from "../../services/firebaseServices";
import { RootState } from "../../redux/store";

export default function TodoList() {

    const dispatch = useDispatch();

    const arrayTodos = useSelector((state: RootState) => state.todos.todos);
    const gettingState = useSelector((state: RootState) => state.todos.gettingTodosState)


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

            {/* <div className="center">
                {arrayTodos.map(todo => (
                    <Todo key={todo.id} todo={todo}></Todo>
                ))}
            </div> */}
            {gettingState === "getting" ?
                <div className='loading-container'>
                    <div className='circle'>
                        <div className='circular-loading'></div>
                    </div>
                    <p>Getting todos</p>
                </div>
                : gettingState === "completed" && arrayTodos.length === 0 ? (
                    <p>There are not todos to do</p>
                )
                    : gettingState === "completed" ? (

                        arrayTodos.map(todo => (
                            <Todo key={todo.id} todo={todo}></Todo>
                        ))
                    )
                        :
                        (
                            <p>The todos could not be obtained</p>
                        )

            }
        </div>

    )
}
