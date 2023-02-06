/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCss from './Homepage.module.css';

export default function Home() {
  const navigate = useNavigate();

  const toQuestion = () => {
    navigate('/question1/1');
  };

  return (
    <div className={HomeCss.main}>
      <div className={HomeCss.intro}>
        <div className={HomeCss.items}>
          <h1>Welcome To This Simple Quiz</h1>
          <h4>Here are the instructions to follow;</h4>
          <p>Explanation</p>
          <ul>
            <li>Go through the question thoroughly before answering</li>
            <li>Once a question is answered, you cant go back</li>
            <li>Choose between TRUE or FALSE</li>
          </ul>
        </div>
        <div className={HomeCss.btn}>
          <div className={HomeCss.button__link}>
            <button
              type="button"
              className={HomeCss.button}
              onClick={toQuestion}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
