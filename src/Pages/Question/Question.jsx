/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QuestionContextC } from '../../context';
import QuestionCss from './Question.module.css';

export default function Question() {
  const [disable, setDisable] = useState(false);
  const disableBtn = () => {
    setDisable(true);
  };
  // };

  const params = useParams();
  const pageNumber = +params.index;

  const [text, setText] = useState('');
  return (
    <QuestionContextC>
      {({ data, checkAnswer, score }) => {
        return (
          <div className={QuestionCss.question__main}>
            {data.length > 0 && (
              <div className={QuestionCss.quiz__sec}>
                <h1 className={QuestionCss.question__heading}>
                  Question {pageNumber}
                </h1>
                <p
                  className={QuestionCss.question__secton}
                  dangerouslySetInnerHTML={{
                    __html: data[pageNumber - 1].question,
                  }}
                />
                <div className={QuestionCss.answers}>
                  <button
                    type="button"
                    className={QuestionCss.true}
                    disabled={disable}
                    onClick={(e) => {
                      disableBtn();
                      setText(() =>
                        checkAnswer(e.target.textContent, pageNumber)
                      );
                    }}
                  >
                    True
                  </button>
                  <button
                    type="button"
                    className={QuestionCss.false}
                    disabled={disable}
                    onClick={(e) => {
                      disableBtn();
                      setText(() =>
                        checkAnswer(e.target.textContent, pageNumber)
                      );
                    }}
                  >
                    False
                  </button>
                </div>
                <div className={QuestionCss.answer__count}>
                  <p>Correct: {score.correct}</p>
                  <p>Wrong: {score.wrong}</p>
                </div>
                <div className={QuestionCss.answer__secton}>
                  {/* <p className={QuestionCss.question__secton}>{text}</p> */}
                  <div className={QuestionCss.answer__secton}>
                    <Link
                      className={QuestionCss.button__link}
                      to={
                        pageNumber === 10
                          ? '/result'
                          : `/question1/${pageNumber + 1}`
                      }
                    >
                      <button
                        className={QuestionCss.next__btn}
                        type="button"
                        onClick={(e) => {
                          setDisable(false);
                          setText('');
                        }}
                      >
                        Next Page
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </QuestionContextC>
  );
}
