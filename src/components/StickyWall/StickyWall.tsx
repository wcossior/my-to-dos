import "./StickyWall.css";
import HeaderWall from '../HeaderWall/HeaderWall';
import TodoList from "../TodosList/TodoList";

export default function StickyWall() {

    return (
        <div className='stickywall'>
            <HeaderWall></HeaderWall>
            <TodoList></TodoList>
        </div>
    )
}