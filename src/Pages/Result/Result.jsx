/* eslint-disable react/no-danger */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { QuestionContextC } from '../../context';
import ResultCss from './Result.module.css';

export default function Result() {
  return (
      <QuestionContextC>
       {({ data, score, setScore,}) => {
        return (
          <div className={ResultCss.result__main}>
            <div className={ResultCss.result__box}>
              <h1 className={ResultCss.result__boxh1}>Results</h1>
              {data.map(({ question, correct_answer }) => {
                return (
                  <div className={ResultCss.result__list}>
                    <p><span
                      key={question}
                      dangerouslySetInnerHTML={{ __html: question }}
                    />
                    <span
                      dangerouslySetInnerHTML={{ __html: correct_answer }}
                    />
                    </p>
                  </div>
                );
              })}
              <div className={ResultCss.result__finalscore} >
                <p>Correct: {score.correct}</p>
                <p>Wrong: {score.wrong}</p>
              </div>
              <div className={ResultCss.res__btn}>
              <Link to="/">
              <button className={ResultCss.res__button} onClick={() => {setScore({ correct: 0, wrong: 0 })} }>Restart</button>
            </Link>
              </div>
            </div>
          </div>
        );
      }}
      </QuestionContextC>
  )
}
