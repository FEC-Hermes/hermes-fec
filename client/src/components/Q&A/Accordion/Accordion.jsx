import React, { useState ,useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import Thumbnails from '../Thumbnails/Thumbnails.jsx';
import  {
  QuesSection,
  AccordionSection,
  Pd,
  AnwrSection,
  Aside,
  Pipe,
  Span
} from './Accordion.js';
import { Button, Buttons } from '../Q&A';


const Accordion = ({ questions, answers, openAnsModal,  openQuesModal, helpful, reporter, setQuesId}) => {

  const [report, setReported] = useState(false);
  const [questionsList, setQuestionsList] = useState(questions);
  const [helped, setHelped] = useState(false);
  const [clicked, setClicked] = useState(false);

  // console.log('question ', questions)
  // console.log('answers ', answers)

  // const makeQA = () => {

  //   const qaObj = questions.map(q => {
  //     const a = getA(q.question_id);

  //     return {
  //       'q': q,
  //       'a': a
  //     };
  //   });

  //   return qaObj;
  // };

  // const getA = (aID) => {
  //   // console.log(aID)
  //   return Object.keys(answers).filter(a => a.aID === aID);
  // };


  // useEffect(() => {
  //   makeQA();
  // });

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

      <AccordionSection>

        {questions && questions.map(ques => {
          return (
            <Aside key={ques.question_id}>
              <Pd>Q: {ques.question_body}</Pd>
              <Pd>
                <span onClick={() => handleHelpful(ques.question_id)}>Helpful?</span>
                <Span>{` Yes (${ques.question_helpfulness }) `}</Span>
                <Pipe>|</Pipe>
                <div
                  onClick={() => {
                    openAnsModal();
                    setQuesId(ques.question_id);
                  }}>
                  Add Answer
                </div>


              </Pd>
              <br/>


              <AnwrSection>
                {answers[ques.question_id]?.map( answr => (
                  <div key={answr.answer_id}>
                    <p>A: {answr.body}</p>
                    <p>
                      {`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`}
                      <Pipe>|</Pipe>
                      <span>Helpful?</span>
                      <Pipe>|</Pipe>
                      <Span>Report</Span>
                    </p>
                    <Thumbnails photos={answr.photos} />
                    <div>
                      <p>
                        {`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} <Pipe>|</Pipe>  Helpful?
                        <Pipe>|</Pipe>
                        <Span onClick={handleReported(answr.answer_id)}>Report</Span>
                      </p>
                    </div>
                  </div>
                )
                )}
              </AnwrSection>
            </Aside>
          );
        })}


        {
          answers &&
          <div>
            <p>LOAD MORE ANSWERERS</p>
            <Buttons>
              <Button onClick={() => setClicked(!clicked)}>MORE ANSWERED QUESTIONS</Button>
            </Buttons>
          </div>
        }

        <Button onClick={openQuesModal}>ADD A QUESTION  +</Button>

      </AccordionSection>
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

