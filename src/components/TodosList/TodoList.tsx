import { useEffect } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { getting_todos, gettingTodos_completed, todos_set, whenGettingTodos_error } from "../../redux/slices/todos";
import { getTodosFromFirstGroupFirestore } from "../../services/firebaseServices";
import { RootState } from "../../redux/store";
import { selectA_group } from "../../redux/slices/group";

export default function TodoList() {

    const dispatch = useDispatch();

    const arrayTodos = useSelector((state: RootState) => state.todos.todos);
    const gettingState = useSelector((state: RootState) => state.todos.gettingTodos_state)
    const error = useSelector((state: RootState) => state.todos.errorTodo)


    useEffect(() => {
        const getTodos = async () => {
            try {
                dispatch(getting_todos());
                const { todosData, firstGroup } = await getTodosFromFirstGroupFirestore();
                dispatch(todos_set(todosData));
                dispatch(selectA_group(firstGroup));
                dispatch(gettingTodos_completed());
            } catch (error) {
                dispatch(whenGettingTodos_error());
            }
        };

        getTodos();
    }, []);

    return (
        <div className='to-dos-container'>
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
                            <p>{error}</p>
                        )

            }
        </div>

    )
}
