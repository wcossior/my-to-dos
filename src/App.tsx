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
  const visible = useSelector((state: RootState) => state.modalDelete.modalVisible);
  const visibleFormAddGroup = useSelector((state: RootState) => state.formAddGroup.formVisible);
  const visibleFormAddTodo = useSelector((state: RootState) => state.formAddTodo.formVisible);
  const visibleFormEditTodo = useSelector((state: RootState) => state.formEditTodo.formVisible);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      {visible &&
        <Modal></Modal>
      }
      {visibleFormAddGroup &&
        <FormAddGroup></FormAddGroup>
      }
      {visibleFormAddTodo &&
        <FormAddTodo></FormAddTodo>
      }
      {visibleFormEditTodo &&
        <FormEditTodo></FormEditTodo>
      }

    </div>
  );
}

export default App;
