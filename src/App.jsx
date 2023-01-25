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
        <Route
          index
          path="/question1"
          element={<Question page="Question 1" path="/question2" />}
        />
        <Route
          index
          path="/question2"
          element={<Question page="Question 2" path="/question3" />}
        />
        <Route
          index
          path="/question3"
          element={<Question page="Question 3" path="/question4" />}
        />
        <Route
          index
          path="/question4"
          element={<Question page="Question 4" path="/question5" />}
        />
        <Route
          index
          path="/question5"
          element={<Question page="Question 5" path="/question6" />}
        />
        <Route
          index
          path="/question6"
          element={<Question page="Question 6" path="/question7" />}
        />
        <Route
          index
          path="/question7"
          element={<Question page="Question 7" path="/question8" />}
        />
        <Route
          index
          path="/question8"
          element={<Question page="Question 8" path="/question9" />}
        />
        <Route
          index
          path="/question9"
          element={<Question page="Question 9" path="/question10" />}
        />
        <Route
          index
          path="/question10"
          element={<Question page="Question 10" path="/result" />}
        />
        <Route index path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
