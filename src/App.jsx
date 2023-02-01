/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import Question from './Pages/Question/Question';
import findQuestions from './api';
import Result from './Pages/Result/Result';
import { QuestionContextP } from './context';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  // const [error, setError] = useState('')

  const checkAnswer = (textContent, index) => {
    if (textContent === data[index].correct_answer) {
      console.log('correct');
      setScore({
        correct: score.correct + 1,
        wrong: score.wrong,
      });
      console.log(score);
      // return 'correct';
    } else {
      console.log('wrong');
      setScore({
        correct: score.correct,
        wrong: score.wrong + 1,
      });
    }
    console.log(score);
    // return 'wrong';
  };

  useEffect(() => {
    findQuestions().then((res) => setData([...res]));
    // .catch(() => setError('An error occured when loading data'));
  }, []);

  return (
    <QuestionContextP
      value={{
        checkAnswer,
        data,
        score,
        setScore,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="question1/:index" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QuestionContextP>
  );
}

export default App;
