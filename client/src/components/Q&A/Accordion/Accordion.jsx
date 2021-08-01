import React, { useState ,useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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

const Accordion = ({ questions, answers, openModal }) => {

  const [clicked, setClicked] = useState(null);

  const toggle = id =>{
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <AccordionSection>
      <QuesSection>
        {questions.results.map(ques => {
          return (
            <Aside key={ques.question_id} >
              <Pd onClick={() =>toggle(ques.question_id)}>
                Q: {ques.question_body}
              </Pd>

              <Pd>Helpful?
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

        { clicked ?
          <AnwrSection>
            {answers.results.map(answr => {
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
          :
          null
        }
      </QuesSection>
    </AccordionSection>
  );
};

export default Accordion;
