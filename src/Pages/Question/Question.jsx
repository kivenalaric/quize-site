/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import findQuestions from '../../api';
import QuestionCss from './Question.module.css';

export default function Question({ pageTittle, path, bgcolor }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    findQuestions()
      .then((res) => setData([...res]))
      .catch((err) => setError('An error occured when loading data'));
  }, []);

  return (
    <div className={QuestionCss.question__main}>
      {data.length > 0 && (
        <div
          className={QuestionCss.quiz__sec}
          style={{ backgroundColor: bgcolor }}
        >
          <h1 className={QuestionCss.question__heading}>Question {pageTittle}</h1>
          <p className={QuestionCss.question__secton}>
            {data[pageTittle - 1].question}
          </p>
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
      )}
    </div>
  );
}
