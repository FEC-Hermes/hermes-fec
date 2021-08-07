import React, { useState } from 'react';
import Answer from '../Answer/Answer.jsx';
import { Button, Buttons } from '../Q&A';

import  {
  Pd,
  Li,
  Pipe,
  Span
} from '../Accordion/Accordion.js';

const Question = ({ questions, openAnsModal, openQuesModal}) => {
  const [idx, setIdx] = useState(2);

  const moreQues = () => {
    setIdx(idx => idx+2);
  };

  return (
    <div>
      {questions.slice(0, idx).map(ques => {
        return (
          <Li key={ques.question_id}>
            <div>
              <Pd>Q: {ques.question_body}</Pd>
              <span >Helpful?</span>
              <Span>{`Yes (${ques.question_helpfulness })`}</Span>
              <Pipe>|</Pipe>
            </div>

            <div
              onClick={() => {
                openAnsModal();
                setQuesId(ques.question_id);
              }}>
            </div>

            <Answer quesId={ques.question_id}/>

            <p onClick={openAnsModal}>Add Answer</p>
          </Li>
        );
      })}

      <div>
        <p>LOAD MORE ANSWERERS</p>
        <Buttons>
          <Button onClick={() => moreQues()}>MORE ANSWERED QUESTIONS</Button>
          <Button onClick={openQuesModal}>ADD A QUESTION  +</Button>
        </Buttons>
      </div>

    </div>
  );
};

export default Question;