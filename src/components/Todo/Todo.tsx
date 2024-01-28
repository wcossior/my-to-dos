import CheckTodo from "../CheckTodo/CheckTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import EditTodo from "../EditTodo/EditTodo";
import "./Todo.css";
import { Task } from "../../models/models";

export default function Todo({ todo }: { todo: Task }) {

    return (
        <div className='to-do'>
            <p>{todo.title}</p>
            <div className='separator'></div>
            <div className="actions">
                <DeleteTodo todoId={todo.customId}></DeleteTodo>
                <EditTodo todo={todo}></EditTodo>
                <CheckTodo todo={todo}></CheckTodo>
            </div>
        </div>
    )
}
