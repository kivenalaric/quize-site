/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionContextC } from '../../context';
import HomeCss from './Homepage.module.css';

export default function Home() {
  return (
    <div className={HomeCss.main}>
      <QuestionContextC>
        {() => {
          return (
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
                <Link className={HomeCss.button__link} to="/question1/1">
                  <button type="button" className={HomeCss.button}>
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          );
        }}
      </QuestionContextC>
    </div>
  );
}
