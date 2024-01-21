import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import FormAddGroup from './components/FormAddGroup/FormAddGroup';

function App() {
  const visible = useSelector((state: RootState) => state.modalDelete.modalVisible);
  const visibleForm = useSelector((state: RootState) => state.formAddGroup.formVisible);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      {visible &&
        <Modal></Modal>
      }
      {visibleForm &&
        <FormAddGroup></FormAddGroup>
      }
    </div>
  );
}

export default App;
