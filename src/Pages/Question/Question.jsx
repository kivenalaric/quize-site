import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCss from './Question.module.css';

export default function Question() {
  return (
    <div className={QuestionCss.main}>
      <h1 className={QuestionCss.heading}>Question 1</h1>
      <p className={QuestionCss.question__secton}>Question?</p>
      <div className={QuestionCss.answers}>
        <button type="button" className={QuestionCss.true}>
          True
        </button>
        <button type="button" className={QuestionCss.false}>
          False
        </button>
      </div>
      <button type="button">
        <Link to="/result">Next Page</Link>
      </button>
    </div>
  );
}
