import { useDispatch } from "react-redux";
import TodoList from "../TodosList/TodoList";
import "./StickyWall.css";
import { showFormToAddTodo } from "../../redux/slices/formAddTodo";

export default function StickyWall() {
    const dispatch = useDispatch();

    const showForm = () =>{
        dispatch(showFormToAddTodo());
    }

    return (
        <div className='stickywall'>
            <div className='title-wall'>
                <h1 className='group-title-in-the-wall'>Ui Design</h1><h2>wall</h2>
                <button className="btn btn-green" type="button" onClick={showForm}>Add to-do</button>
            </div>
            <TodoList></TodoList>
        </div>
    )
}