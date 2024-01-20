import TodoList from "../TodosList/TodoList";
import "./StickyWall.css";

export default function StickyWall() {

    return (
        <div className='stickywall'>
            <div className='title-wall'>
                <h1 className='group-title-in-the-wall'>Ui Design</h1><h2>wall</h2>
            </div>
            <TodoList></TodoList>
        </div>
    )
}