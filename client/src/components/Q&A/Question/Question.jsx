import React from 'react';
import Answer from '../Answer/Answer.jsx';

import  {
  Pd,
  Li,
  Pipe,
  Span
} from '../Accordion/Accordion.js';

const Question = ({ questions }) => {
//   console.log('questions ',questions);
// onClick={() => handleHelpful(ques.question_id)}
  return (
    <div>
      {questions.map(ques => {
        return (
          <Li key={ques.question_id}>
            <div>
              <Pd>Q: {ques.question_body}</Pd>
              <span >Helpful?</span>
              <Span>{` Yes (${ques.question_helpfulness }) `}</Span>
              <Pipe>|</Pipe>
            </div>
            <div
              onClick={() => {
                openAnsModal();
                setQuesId(ques.question_id);
              }}>
            </div>

            <Answer quesId={ques.question_id}/>

            <p> Add Answer</p>
          </Li>
        );
      })}
    </div>
  );
};

export default Question;