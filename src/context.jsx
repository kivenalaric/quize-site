import { createContext } from 'react';

const myContext = createContext();
const QuestionContextP = myContext.Provider;
const QuestionContextC = myContext.Consumer;

export { QuestionContextP, QuestionContextC };
