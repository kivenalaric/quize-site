/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import findQuestions from '../../api';
import QuestionCss from './Question.module.css';

export default function Question() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [answer, setAnswer] = useState();
  const [show, setShow] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    findQuestions()
      .then((res) => setData([...res]))
      .catch(() => setError('An error occured when loading data'));
  }, []);

  // function checkAnswer(e) {
  //   const theValue = e.target.value;
  //   console.log(`${theValue}`);
  //   if (theValue === data[pageTittle - 1].correct_answer) {
  //     return <p>Correct!!</p>;
  //   }
  //   return <p>Wrong XX</p>;
  // }
  const disableBtn = (event) => {
    setShow(true);
    setDisable(true);
    if (answer === data.correct_answer) {
      setCorrectAnswer((count) => count + 1);
      return <p>{correctAnswer}</p>;
    }
    setWrongAnswer((count) => count + 1);
    return <p>{wrongAnswer}</p>;
  };

  const checkAnswer = () => {
    if (answer === '') {
      return '';
    }
    if (answer === data.correct_answer) {
      return <p>Correct!!</p>;
    }
    return <p>Wrong XX</p>;
  };

  return (
    <div className={QuestionCss.question__main}>
      {data.length > 0 && (
        <div className={QuestionCss.quiz__sec}>
          <h1 className={QuestionCss.question__heading}>Question</h1>
          {error && <div>{error}</div>}
          <p className={QuestionCss.question__secton}>
            {/* // dangerouslySetInnerHTML={{
            //   __html: data.question,
            // }} */}
          </p>
          <div className={QuestionCss.answers}>
            <button
              type="button"
              className={QuestionCss.true}
              disabled={disable}
              onClick={(e) => setAnswer('True')}
            >
              True
            </button>
            <button
              type="button"
              className={QuestionCss.false}
              disabled={disable}
              onClick={(e) => setAnswer('False')}
            >
              False
            </button>
          </div>
          <button
            className={QuestionCss.next__btn}
            type="button"
            disabled={disable}
            onClick={disableBtn}
          >
            Submit
          </button>
          <div className={QuestionCss.answer__count}>
            <p>Correct: {correctAnswer}</p>
            <p>Wrong: {wrongAnswer}</p>
          </div>
          {show && (
            <div className={QuestionCss.answer__secton}>
              <p className={QuestionCss.question__secton}>{checkAnswer()}</p>
              <div className={QuestionCss.answer__secton}>
                <Link className={QuestionCss.button__link}>
                  <button
                    className={QuestionCss.next__btn}
                    type="button"
                    onClick={() => {
                      setShow(false);
                      setDisable(false);
                    }}
                  >
                    Next Page
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
