import React from 'react';
import { Link } from 'react-router-dom';
import HomeCss from './Homepage.module.css';

export default function Home() {
  return (
    <>
      <div className={HomeCss.intro}>
        <h1>Welcome To This Simple Quize</h1>
        <h4>Here are the instructions to follow;</h4>
        <p>Explanation</p>
      </div>
      <button type="button">
        <Link to="/question1">Start Quiz</Link>
      </button>
    </>
  );
}
