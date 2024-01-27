import React from 'react';
import "./Modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleted, errorDeletingTodo, loading } from '../../redux/slices/deleteModal';
import { deleteTodoFireStore, getTodosFromFirestore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import { getting_todos, gettingTodos_completed, hideDeleteTodo_form, todos_set, whenDeletingTodo_error } from '../../redux/slices/todos';
import Loading from '../Loading/Loading';
import ResultCard from '../ResultCard/ResultCard';

const Modal = () => {
    const dispatch = useDispatch();
    const idTodo = useSelector((state: RootState) => state.modalDelete.idTodo);
    const deleteState = useSelector((state: RootState) => state.modalDelete.deletingState);
    const error = useSelector((state: RootState) => state.modalDelete.errorWhenDeletingTodo);

    const closeModalDelete = () => {
        dispatch(hideDeleteTodo_form());
    }

    const deleteTodo = async () => {
        try {
            dispatch(loading());
            await deleteTodoFireStore(idTodo);
            dispatch(deleted());
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
