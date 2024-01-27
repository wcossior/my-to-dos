import React from 'react';
import "./Modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoFireStore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import { deleted_todo, deleting_todo, hideDeleteTodo_form, whenDeletingTodo_error } from '../../redux/slices/todos';
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';

const Modal = () => {
    const dispatch = useDispatch();
    const idTodo = useSelector((state: RootState) => state.todos.forDeleting_idTodo);
    const deleteState = useSelector((state: RootState) => state.todos.deletingTodo_state);
    const error = useSelector((state: RootState) => state.todos.deletingTodo_error);

    const closeModalDelete = () => {
        dispatch(hideDeleteTodo_form());
    }

    const deleteTodo = async () => {
        try {
            dispatch(deleting_todo());
            await deleteTodoFireStore(idTodo);
            dispatch(deleted_todo());
        } catch (error) {
            dispatch(whenDeletingTodo_error());
        }
    }

    return (
        <div className='modal-bg'>
            {deleteState === "loading" ?
                <Loading></Loading>
                :
                deleteState === "deleted" || error ?
                    <ResultCard errorMsg={error} msg='Todo deleted successfully' type="todos"></ResultCard>
                    :
                    <div className="modal">
                        <div>
                            <p>Are you sure to delete?</p>
                            <div className="btns-container">
                                <button className='btn btn-green miau' onClick={deleteTodo}>Yes</button>
                                <button className='btn btn-red' onClick={closeModalDelete}>No</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Modal
