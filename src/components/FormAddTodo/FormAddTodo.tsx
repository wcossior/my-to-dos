import { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import { created_todo, creating_todo, hideAddTodo_form, whenAddingTodo_error } from '../../redux/slices/todos';
import { postTodoToFireStore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';

const FormAddTodo = () => {
    const dispatch = useDispatch();

    const [todoTitle, setTodoTitle] = useState("");
    const submitState = useSelector((state: RootState) => state.todos.adddingTodo_state);
    const groupSelected = useSelector((state: RootState) => state.group.group_selected);
    const errorWhenAddingTodo = useSelector((state: RootState) => state.todos.addingTodo_error);

    const closeForm = () => {
        dispatch(hideAddTodo_form());
    }

    const addTodo = async () => {
        try {
            dispatch(creating_todo());
            await postTodoToFireStore(todoTitle, groupSelected.id);
            dispatch(created_todo());
            setTodoTitle("");
        } catch (error) {
            dispatch(whenAddingTodo_error());
        }
    }

    return (

        <div className='form-container'>

            {submitState === "loading" ?
                <Loading></Loading>
                :
                submitState === "created" || errorWhenAddingTodo ?
                    <ResultCard errorMsg={errorWhenAddingTodo} msg='Todo created successfully' type="todos"></ResultCard>
                    :
                    <div className="form">
                        <p className='title-form'>ADDING A TODO</p>
                        <div className='close-icon-container'>
                            <XmarkIcon className='xmark-icon' onClick={closeForm} />
                        </div>
                        <label>Add a todo to your group: </label>
                        <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} disabled={submitState !== ""} />
                        <button className={"btn btn-green " + submitState} type="submit" onClick={addTodo} disabled={!todoTitle || submitState === "loading"}>Create</button>
                    </div>
            }

        </div>
    )
}

export default FormAddTodo
