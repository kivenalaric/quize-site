import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import Question from './Pages/Question/Question';
import Result from './Pages/Result/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="question" element={<Question />} />
        <Route index path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
