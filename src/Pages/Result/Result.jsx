/* eslint-disable react/no-danger */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionContextP from '../../context';
import ResultCss from './Result.module.css';

export default function Result() {
  const { data, score, setScore } = useContext(QuestionContextP);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  return (
    <div className={ResultCss.result__main}>
      <div className={ResultCss.result__box}>
        <h1 className={ResultCss.result__boxh1}>Results</h1>
        {data.map(({ question, correct_answer }) => {
          return (
            <div className={ResultCss.result__list}>
              <p>
                <span
                  key={question}
                  dangerouslySetInnerHTML={{ __html: question }}
                />
                <span dangerouslySetInnerHTML={{ __html: correct_answer }} />
              </p>
            </div>
          );
        })}
        <div className={ResultCss.result__finalscore}>
          <p>Correct: {score.correct}</p>
          <p>Wrong: {score.wrong}</p>
        </div>
        <div className={ResultCss.res__btn}>
          <div>
            <button
              className={ResultCss.res__button}
              onClick={() => {
                goHome();
                setScore({ correct: 0, wrong: 0 });
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
