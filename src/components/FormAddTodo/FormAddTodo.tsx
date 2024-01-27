import React, { useState } from 'react';
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";
import { useDispatch, useSelector } from 'react-redux';
import { hideFormToAddTodo } from '../../redux/slices/formAddTodo';
import { created, errorRequestTodo, loading } from '../../redux/slices/todos';
import { postTodoToFireStore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';

const FormAddTodo = () => {
    const dispatch = useDispatch();

    const [todoTitle, setTodoTitle] = useState("");
    const submitState = useSelector((state: RootState) => state.todos.submitState);
    const groupSelected = useSelector((state: RootState) => state.group1.group_selected);
    const error = useSelector((state: RootState) => state.todos.errorTodo);

    const closeForm = () => {
        dispatch(hideFormToAddTodo());
    }

    const addTodo = async () => {
        try {
            dispatch(loading());
            await postTodoToFireStore(todoTitle, groupSelected.id);
            dispatch(created());
            setTodoTitle("");
        } catch (error) {
            dispatch(errorRequestTodo());
        }
    }

    return (

        <div className='form-container'>

            {submitState === "loading" ?
                <Loading></Loading>
                :
                submitState === "created" || error ?
                    <ResultCard errorMsg={error} msg='Todo created successfully' type="todos"></ResultCard>
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
