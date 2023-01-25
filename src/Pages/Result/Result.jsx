import React from 'react';
import { Link } from 'react-router-dom';

export default function Result() {
  return (
    <div>
      <h1>Result</h1>
      <button type="button">
        <Link to="/">Restart</Link>
      </button>
    </div>
  );
}
