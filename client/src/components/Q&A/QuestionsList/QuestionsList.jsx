import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Thumbnails from '../Thumbnails/Thumbnails.jsx';


const QuesSection = styled.section`
    display: flex;
`;

const AnwrSection = styled.section`
    display: flex;
    flex-flow: column;
`;

const Main = styled.main`
    font-family: Fira Sans;
    display: flex;
    flex-flow: column;
`;

const P = styled.p`
    display: flex;
    flex: 1;
    max-width: 30%
`;

const Span = styled.span`
    text-decoration: underline;
`;

const Pipe = styled.span`
    margin-left: 1%;
    margin-right: 1%;
`;

const Aside = styled.aside`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const QuestionsList = ({questions, answers}) => {
  // {console.log(answers.results)}
  return (
    <div>
      <ul>
        <li>
          <Main>

            <QuesSection>
              {questions.results.map(ques => {
                return (
                  <Aside key={ques.question_id}>
                    <P>Q: {ques.question_body}</P>
                    <P>Helpful?
                      <Span>
                        {`Yes (${ques.question_helpfulness})   `}
                      </Span>
                      <Pipe>|</Pipe>
                      <Span>
                            Add Answer
                      </Span>
                    </P>
                  </Aside>
                );
              })}
            </QuesSection>

            <AnwrSection>
              {/* {console.log(answers.results)} */}
              {answers.results.map(answr => {
                return (
                  <div key={answr.answer_id}>
                    <p>A: {answr.body}</p>

                    <p>{`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} <Pipe>|</Pipe>  Helpful?
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
            </AnwrSection>
          </Main>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsList;