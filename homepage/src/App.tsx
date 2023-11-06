import React from 'react';
import logo from './logo.svg';
import photo from './selfie.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="it's me" />
        <div>
          Hello! My name is Paul Storm. I am a fullstack software developer.
        </div>
        <div>
          I am planning on using this page to organize and track my projects.
        </div>
      </header>
    </div>
  );
}

export default App;
