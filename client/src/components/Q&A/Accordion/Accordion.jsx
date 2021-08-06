import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import Question from '../Question/Question.jsx';

import  {QuesSection} from './Accordion.js';
import { Button, Buttons } from '../Q&A';


const Accordion = ({ questions, openAnsModal,  openQuesModal, helpful, reporter, setQuesId}) => {

  const [questionsList, setQuestionsList] = useState(questions);
  const [clicked, setClicked] = useState(false);


  const handleHelpful = (id) => {
    if (!helped) {
      helpful(id);
      setHelped(true);
    }
    else {
      console.log('you touched me already');
    }
  };


  const handleReported = (id) => {
    if (!report) {
      reporter(id);
      setReported(true);
    }
    else {
      console.log('You reported me already.');
    }
  };

  let firstTwo = questions.slice(0, 2);

  return (
    <QuesSection>
      <Question questions={questions} />
    </QuesSection>



  // {
  //   answers &&
  //   <div>
  //     <p>LOAD MORE ANSWERERS</p>
  //     <Buttons>
  //       <Button onClick={() => setClicked(!clicked)}>MORE ANSWERED QUESTIONS</Button>
  //     </Buttons>
  //   </div>
  // }

  // <Button onClick={openQuesModal}>ADD A QUESTION  +</Button>

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

