import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import FormAddGroup from './components/FormAddGroup/FormAddGroup';
import FormAddTodo from './components/FormAddTodo/FormAddTodo';
import FormEditTodo from './components/FormEditTodo/FormEditTodo';

function App() {
  const deleteTodoForm = useSelector((state: RootState) => state.todos.deleteTodo_form);
  const addGroupForm = useSelector((state: RootState) => state.group.addGroup_form);
  const addTodoForm = useSelector((state: RootState) => state.todos.addTodo_form);
  const editTodoForm = useSelector((state: RootState) => state.todos.editTodo_form);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      {deleteTodoForm &&
        <Modal></Modal>
      }
      {addGroupForm &&
        <FormAddGroup></FormAddGroup>
      }
      {addTodoForm &&
        <FormAddTodo></FormAddTodo>
      }
      {editTodoForm &&
        <FormEditTodo></FormEditTodo>
      }
    </div>
  );
}

export default App;
