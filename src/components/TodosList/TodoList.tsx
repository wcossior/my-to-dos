import Todo from "../Todo/Todo";
import "./TodoList.css";

export default function TodoList() {

    return (
        <div className='to-dos-container'>
            <div className="center">
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
            </div>
        </div>
    )
}
