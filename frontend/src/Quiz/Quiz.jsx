import React, { useState } from "react";
import styled from "styled-components";

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  align-items: center;
`;
const Questions = styled.div`
  margin: 10vh 0;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const questions = [
  ["For start where are going to ask you a few questions...", "Okay"],
  ["What's your name?", "Submit"],
  ["What your favourite movie", "Submit"],
  ["Gender", "Submit"],
  ["Where do you live", "Submit"],
];
const questionIterator = questions[Symbol.iterator]();
const qIterator = questionIterator.next();

const Quiz = () => {
  const [question, setQuestion] = useState(qIterator && qIterator.value[0]);
  const [button, setButton] = useState(qIterator && qIterator.value[1]);

  return (
    <QuizBox>
      <h2> Few questions to understand you better... </h2>
      <Questions> {question}</Questions>
      <button
        onClick={() => {
          const qArray = questionIterator.next();

          if (qArray.done) {
            return;
          }

          setQuestion(qArray.value[0]);
          setButton(qArray.value[1]);
          console.log(qArray);
        }}
      >
        {" "}
        {button}
      </button>
    </QuizBox>
  );
};

export default Quiz;
