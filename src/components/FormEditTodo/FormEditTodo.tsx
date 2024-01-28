import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import { edit_todo, edited_todo, hideEditTodo_form, whenEditingTodo_error } from '../../redux/slices/todos';
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import ResultCard from "../ResultCard/ResultCard";
import { Task } from "../../models/models";
import { editTodoToFireStore } from "../../services/firebaseServices";

const FormEditTodo = () => {
    const todoForEdit = useSelector((state: RootState) => state.todos.todo_forEdit);
    const editState = useSelector((state: RootState) => state.todos.editingTodo_state);
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const errorWhenEditingTodo = useSelector((state: RootState) => state.todos.editingTodo_error);
    const [todoTitle, setTodoTitle] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const prevTitleValue = todoForEdit ? todoForEdit.title : "";

        setTodoTitle(prevTitleValue);
    }, []);

    const closeForm = () => {
        dispatch(hideEditTodo_form());
    }

    async function editTodo() {
        try {
            if (groupSelected && todoForEdit) {
                const newTodo: Task = {
                    ...todoForEdit,
                    title: todoTitle!==todoForEdit?.title? todoTitle : todoForEdit.title,
                };
                dispatch(edit_todo(newTodo));
                dispatch(edited_todo());
                await editTodoToFireStore(newTodo);
            } else {
                dispatch(whenEditingTodo_error());
            }
        } catch (error) {
            dispatch(whenEditingTodo_error());
        }
    }

    return (

        <div className='form-container'>

            {editState === "edited" || errorWhenEditingTodo ?
                <ResultCard errorMsg={errorWhenEditingTodo} msg='Todo edited successfully' type="todos"></ResultCard>
                :
                <div className="form">
                    <p className='title-form'>EDITING A TODO</p>
                    <div className='close-icon-container'>
                        <XmarkIcon className='xmark-icon' onClick={closeForm} />
                    </div>
                    <label>
                        Update your todo: </label>
                    <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} disabled={editState !== ""} />
                    <button className={"btn btn-green " + editState} type="submit" onClick={editTodo} disabled={!todoTitle || todoTitle === todoForEdit?.title}>Edit</button>
                </div>
            }

        </div>
    )
}

export default FormEditTodo
