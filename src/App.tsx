import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Form from './components/Form/Form';

function App() {
  const visible = useSelector((state:RootState) => state.modalDelete.modalVisible);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      {visible &&
        <Modal></Modal>
      }
      <Form></Form>
    </div>
  );
}

export default App;
