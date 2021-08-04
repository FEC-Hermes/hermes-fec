import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Thumbnails from '../Thumbnails/Thumbnails.jsx';
import Accordion from '../Accordion/Accordion.jsx';


const AnwrSection = styled.section`
    display: flex;
    flex-flow: column;
`;

const Main = styled.main`
    font-family: Fira Sans;
    display: flex;
    flex-flow: column;
`;

const QuestionsListContainer = styled.div`
  margin-left:1rem;
`;


const QuestionsList = ({questions, answers, openModal}) => {

  // {console.log(answers.results)}
  return (
    <QuestionsListContainer>
      <ul>
        <li>
          <Main>


              {/* {questions.results.map(ques => {
                return (
                  <Aside key={ques.question_id}>
                    <Pd>Q: {ques.question_body}</Pd>

                    <Pd>Helpful?
                      <Span>
                        {`Yes (${ques.question_helpfulness})   `}
                      </Span>
                      <Pipe>|</Pipe>
                      <div onClick={openModal}>
                            Add Answer
                      </div>
                    </Pd>
                  </Aside>
                );
              })} */}

              <Accordion questions={questions} answers={answers} openModal={openModal}/>
{/*
            <AnwrSection>
              {answers.results.map(answr => {
                return (
                  <div key={answr.answer_id}>
                    <p>A: {answr.body}</p>

                    <p>{`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`}
                      <Pipe>|</Pipe>  Helpful?
                      <Pipe>|</Pipe>
                      <Span>Report</Span>
                    </p>

                    <Thumbnails photos={answr.photos} />

                    <div>
                      <p>{`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} <Pipe>|</Pipe>  Helpful?
                        <Pipe>|</Pipe>
                        <Span>Report</Span> </p>
                    </div>
                  </div>
                );
              })}
            </AnwrSection> */}

          </Main>
        </li>
      </ul>
    </QuestionsListContainer>
  );
};

export default QuestionsList;