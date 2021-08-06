import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import Question from '../Question/Question.jsx';

import  {QuesSection} from './Accordion.js';


const Accordion = ({ questions, openAnsModal,  openQuesModal, setQuesId}) => {

<<<<<<< HEAD
  const [report, setReported] = useState(false);
  const [questionsList, setQuestionsList] = useState(questions);
  const [helped, setHelped] = useState(false);
  const [clicked, setClicked] = useState(false);

  // console.log('question ', questions)
  // console.log('answers ', answers)

  const makeQA = () => {

    const qaObj = questions.map(q => {
      const a = getA(q.question_id);

      return {
        'q': q,
        'a': a
      };
    });

    return qaObj;
  };

  const getA = (aID) => {
    // console.log(aID)
    return Object.keys(answers).filter(a => a.aID === aID);
  };


  useEffect(() => {
    makeQA();
  });

  const handleHelpful = (id) => {
    if (!helped) {
      helpful(id);
      setHelped(true);
    }
    else {
      // console.log('you touched me already');
    }
  };


  const handleReported = (id) => {
    if (!report) {
      reporter(id);
      setReported(true);
    }
    else {
      // console.log('You reported me already.');
    }
  };

  let firstTwo = questions.slice(0, 2);
=======
  // const [questionsList, setQuestionsList] = useState(questions);
  // const [clicked, setClicked] = useState(false);
>>>>>>> mergerQnA

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

