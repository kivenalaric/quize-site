/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCss from './Question.module.css';

export default function Question({ page, path }) {
  return (
    <div className={QuestionCss.main}>
      <h1 className={QuestionCss.heading}>{page}</h1>
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
        <Link to={path}>Next Page</Link>
      </button>
    </div>
  );
}
