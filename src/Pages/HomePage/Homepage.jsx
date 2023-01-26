/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import HomeCss from './Homepage.module.css';

export default function Home({ color }) {
  return (
    <div className={HomeCss.main}>
      <div className={HomeCss.intro} style={{ backgroundColor: color }}>
        <div className={HomeCss.items}>
          <h1>Welcome To This Simple Quiz</h1>
          <h4>Here are the instructions to follow;</h4>
          <p>Explanation</p>
        </div>
        <div className={HomeCss.btn}>
          <button type="button" className={HomeCss.button}>
            <Link className={HomeCss.button__link} to="/question1">
              Start Quiz
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
