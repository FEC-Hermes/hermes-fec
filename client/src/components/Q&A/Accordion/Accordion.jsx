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
import { Button, Buttons} from '../Q&A';


const Accordion = ({ questions, openModal }) => {

  const [clicked, setClicked] = useState(false);
  const [answ, setAns] = useState([]);
  const [helpfulness, setHelpfulness] = useState(0);

  const getAns = async (question_id) => {
    try {
      let ans = await axios.get(`/qa/questions/${question_id}/answers`);
      return ans.data;
    } catch(err) {
      console.error(err);
    }
  };

  useEffect( () => {
    if (answ.length === 0) {
      let getAnswers = questions.forEach(async (ques) => {
        let a = await getAns(ques.question_id);
        setAns(answ => [...answ, a]);
      });
    }
  },[]);


  // useEffect( () => {
  //   const helpfulness = async (question_id) => {
  //     try {
  //       let help = await axios.get(`/qa/questions/${question_id}/helpful`);
  //       return help.data;
  //     } catch(err) {
  //       console.error(err);
  //     }
  //   };
  //   helpfulness();
  // },[helpfulness]);

  const helpful = async (question_id) => {
    try {
      let help = await axios.put(`/qa/questions/${question_id}/helpful`);
      console.log(help)
    } catch(err) {
      console.error(err);
    }
  };

  let firstTwo = questions.slice(0, 2);

  return (
    <QuesSection>

      <AccordionSection>

        {questions.map(ques => {
          return (
            <Aside key={ques.question_id}>
              <Pd>
                Q: {ques.question_body}
              </Pd>

              <Pd>
                <span onClick={() => helpful(ques.question_id)}>Helpful?</span>
                <Span>
                  {`Yes (${ques.question_helpfulness})`}
                </Span>

                <Pipe>|</Pipe>

                <div onClick={openModal}>
                  Add Answer
                </div>

              </Pd>
            </Aside>
          );
        })}

        <AnwrSection>
        {console.log('Anw ', answ)}
          {answ.results && answ.results.map(answr => {
            return (
              <div key={answr.answer_id}>
                {console.log(answr)}
                {/* <p>A: {answr.body}</p>

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
                    <Span>Report</Span>
                  </p>
                </div> */}
              </div>
            );
          })}
        </AnwrSection>


        { clicked &&

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
        }

        {/* <Buttons>
          <Button onClick={() => setClicked(!clicked)}>MORE ANSWERED QUESTIONS</Button>
        </Buttons> */}

        {
          answ.length > 2 &&
          <div>
            <p>LOAD MORE ANSWERERS</p>
            <Buttons>
              <Button onClick={() => setClicked(!clicked)}>MORE ANSWERED QUESTIONS</Button>
            </Buttons>
          </div>
        }

        <Button onClick={openModal}>ADD A QUESTION  +</Button>
      </AccordionSection>
    </QuesSection>

  );
};

export default Accordion;
