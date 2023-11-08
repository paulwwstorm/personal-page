import React from 'react';
import logo from './logo.svg';
import photo from './selfie.jpg'
import './App.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Col xs={6} md={4}> */}
        <Image
          src={photo}
          alt="it's me"
          rounded
          fluid
          height="300vmin"
          />
        {/* </Col> */}
        <div>
          Hello! My name is Paul Storm. I am a fullstack software developer.
        </div>
        <div>
          This page is a work in progress, click <a href="https://www.youtube.com/watch?v=pmqzUk7WuUk&feature=youtu.be">here</a> for a demo of a previous full-stack application I built
        </div>
      </header>
    </div>
  );
}

export default App;
