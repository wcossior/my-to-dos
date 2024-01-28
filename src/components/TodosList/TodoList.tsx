import Todo from "../Todo/Todo";
import "./TodoList.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function TodoList() {

    const arrayTodos = useSelector((state: RootState) => state.todos.todosFrom_group);
    const gettingState = useSelector((state: RootState) => state.todos.gettingTodos_state);
    const errorWhenGettingTodos = useSelector((state: RootState) => state.todos.gettingTodos_error);

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
                            <Todo key={todo.customId} todo={todo}></Todo>
                        ))
                    )
                        :
                        (
                            <p>{errorWhenGettingTodos}</p>
                        )

            }
        </div>

    )
}
