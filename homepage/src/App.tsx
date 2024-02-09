import React from 'react';
import logo from './logo.svg';
import './App.css';
import Col from 'react-bootstrap/Col';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
