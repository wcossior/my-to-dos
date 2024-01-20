import CheckTodo from "../CheckTodo/CheckTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import EditTodo from "../EditTodo/EditTodo";
import "./Todo.css";

export default function Todo() {
    return (
        <div className='to-do'>
            <p>Officiis expedita cupiditate culpa sapiente explicabo eius suscipit iure odit</p>
            <div className='separator'></div>
            <div className="actions">
                <DeleteTodo></DeleteTodo>
                <EditTodo></EditTodo>
                <CheckTodo></CheckTodo>
            </div>
        </div>
    )
}
