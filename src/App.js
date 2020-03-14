import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Body from './components/body/Body.js';
import Content from './components/content/Content.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Content />
    </div>
  );
}

export default App;
