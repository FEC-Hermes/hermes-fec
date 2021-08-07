import React, { useState } from 'react';
import Answer from '../Answer/Answer.jsx';
import { Button, Buttons } from '../Q&A';

import  {
  Pd,
  S,
  Li,
  Pipe,
  Span,
  Ques,
  Aside
} from '../Accordion/Accordion.js';

const Question = ({ questions, openAnsModal, openQuesModal}) => {
  const [idx, setIdx] = useState(4);

  const moreQues = () => {
    setIdx(idx => idx+2);
  };

  return (
    <div>
      {questions.slice(0, idx).map(ques => {
        return (
          <Li key={ques.question_id}>
            <Ques>
              <Pd> <S>Q:</S>{ques.question_body}</Pd>
              <Aside>
                <span >Helpful?</span>
                <Span>{`Yes (${ques.question_helpfulness })`}</Span>
                <Pipe>|</Pipe>
                <p onClick={openAnsModal}>Add Answer</p>
              </Aside>
            </Ques>

            <div
              onClick={() => {
                openAnsModal();
              }}>
            </div>

            <Answer quesId={ques.question_id}/>
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
