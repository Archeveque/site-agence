import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Studycase from './pages/Works';
import Navbar from './components/Navbar';
import StudyCase from './components/Studies'
import books from './components/Studies'
import Book from './components/Book'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/book/:bookSlug" element={<Book />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App