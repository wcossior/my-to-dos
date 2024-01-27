import { useDispatch, useSelector } from "react-redux";
import TodoList from "../TodosList/TodoList";
import "./StickyWall.css";
import { showFormToAddTodo } from "../../redux/slices/formAddTodo";
import { RootState } from "../../redux/store";

export default function StickyWall() {
    const dispatch = useDispatch();
    const group = useSelector((state: RootState) => state.group.group_selected);
    const groups = useSelector((state: RootState) => state.group.groups);  

    const showForm = () => {
        dispatch(showFormToAddTodo());
    }

    return (
        <div className='stickywall'>
            <div className='title-wall'>
                <h1 className='group-title-in-the-wall'>{!group.title ? "Choose a group" : group.title}</h1><h2>wall</h2>
                {groups.length > 0 && group.title !== "" &&
                    <button className="btn btn-green" type="button" onClick={showForm}>Add to-do</button>
                }
            </div>
            <TodoList></TodoList>
        </div>
    )
}