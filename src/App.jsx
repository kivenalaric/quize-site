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
        <Route index path="/" element={<Home color="#00203fff" />} />
        <Route
          index
          path="/question1"
          element={
            <Question
              pageTittle="Question 1"
              path="/question2"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question2"
          element={
            <Question
              pageTittle="Question 2"
              path="/question3"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question3"
          element={
            <Question
              pageTittle="Question 3"
              path="/question4"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question4"
          element={
            <Question
              pageTittle="Question 4"
              path="/question5"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question5"
          element={
            <Question
              pageTittle="Question 5"
              path="/question6"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question6"
          element={
            <Question
              pageTittle="Question 6"
              path="/question7"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question7"
          element={
            <Question
              pageTittle="Question 7"
              path="/question8"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question8"
          element={
            <Question
              pageTittle="Question 8"
              path="/question9"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question9"
          element={
            <Question
              pageTittle="Question 9"
              path="/question10"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route
          index
          path="/question10"
          element={
            <Question
              pageTittle="Question 10"
              path="/result"
              bgcolor="#adefd1ff"
            />
          }
        />
        <Route index path="/result" element={<Result />} color="#00203fff" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
