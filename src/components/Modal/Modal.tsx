import React from 'react';
import "./Modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../redux/slices/deleteModal';
import { deleteTodoFireStore, getTodosFromFirestore } from '../../services/firebaseServices';
import { RootState } from '../../redux/store';
import { errorGettingTodos, gettingTodos, gettingTodosCompleted, setTodos } from '../../redux/slices/todos';

const Modal = () => {
    const dispatch = useDispatch();
    const idTodo = useSelector((state: RootState) => state.modalDelete.idTodo);


    const closeModalDelete = () => {
        dispatch(hideModal());
    }

    const getTodos = async () => {
        try {
            dispatch(gettingTodos());
            const todos = await getTodosFromFirestore();
            dispatch(setTodos(todos));
            dispatch(gettingTodosCompleted());
        } catch (error) {
            dispatch(errorGettingTodos());
        }
    };

    const deleteTodo = async () => {
        try {
            await deleteTodoFireStore(idTodo);
            getTodos();
            dispatch(hideModal());
           
        } catch (error) {
            console.error('Error when addding a group:', error);
        }
    }

    return (
        <div className='modal-bg'>
            <div className="modal">
                <p>Are you sure to delete?</p>
                <div className="btns-container">
                    <button className='btn btn-green miau' onClick={deleteTodo}>Yes</button>
                    <button className='btn btn-red' onClick={closeModalDelete}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
