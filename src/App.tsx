import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';
import InfoModal from './components/InfoModal/InfoModal';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      <InfoModal></InfoModal>
    </div>
  );
}

export default App;
