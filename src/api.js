const BASE_URL = 'https://opentdb.com/api.php?';
const API_KEY = 'amount=10&difficulty=hard&type=boolean';

function findQuestions() {
  return fetch(`${BASE_URL}${API_KEY}`)
    .then((res) => res.json())
    .then((res) => res.results);
}

export default findQuestions;
