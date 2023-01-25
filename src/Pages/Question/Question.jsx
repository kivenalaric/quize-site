/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCss from './Question.module.css';

export default function Question({ pageTittle, path, bgcolor }) {
  return (
    <div className={QuestionCss.question__main}>
      <div
        className={QuestionCss.quiz__sec}
        style={{ backgroundColor: bgcolor }}
      >
        <h1 className={QuestionCss.question__heading}>{pageTittle}</h1>
        <p className={QuestionCss.question__secton}>Question?</p>
        <div className={QuestionCss.answers}>
          <button type="button" className={QuestionCss.true}>
            True
          </button>
          <button type="button" className={QuestionCss.false}>
            False
          </button>
        </div>
        <Link className={QuestionCss.button__link} to={path}>
          <button className={QuestionCss.next__btn} type="button">
            Next Page
          </button>
        </Link>
      </div>
    </div>
  );
}
