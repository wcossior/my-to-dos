import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
    </div>
  );
}

export default App;
