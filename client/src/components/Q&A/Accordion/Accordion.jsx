import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import Question from '../Question/Question.jsx';

import  {QuesSection} from './Accordion.js';


const Accordion = ({ questions, openAnsModal,  openQuesModal, setQuesId}) => {

  // const [questionsList, setQuestionsList] = useState(questions);
  // const [clicked, setClicked] = useState(false);

  return (
    <QuesSection>
      <Question
        questions={questions}
        openQuesModal={openQuesModal}
        openAnsModal={openAnsModal}
      />
    </QuesSection>
  );
};

export default Accordion;

{/* <Buttons>
          <Button onClick={() => setClicked(!clicked)}>MORE ANSWERED QUESTIONS</Button>
        </Buttons> */}


{/* { clicked &&

          <AnwrSection>
            {answ.slice(2).map(answr => {
              return (
                <div key={answr.answer_id}>
                  <p>A: {answr.body}</p>

                  <p>
                    {`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`}
                    <Pipe>|</Pipe>  Helpful?
                    <Pipe>|</Pipe>
                    <Span>Report</Span>
                  </p>

                  <Thumbnails photos={answr.photos} />


                  <div>
                    <p>
                      {`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} <Pipe>|</Pipe>  Helpful?
                      <Pipe>|</Pipe>
                      <Span>Report</Span>
                    </p>
                  </div>
                </div>
              );
            })}
          </AnwrSection>
          } */}

