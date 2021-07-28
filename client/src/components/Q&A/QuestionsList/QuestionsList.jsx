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
    display: flex;
    flex-flow: column;
`;

const P = styled.p`
    flex: 1;

`;

const Aside = styled.aside`
    display: flex;
    width: 100%;
`;

const QuestionsList = ({questions, answers}) => {
  {console.log(answers.results)}
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
                    <p>Helpful?
                      <span>
                                                Yes ({ques.question_helpfulness}) |
                      </span>

                      <span>
                                                Add Answer
                      </span>
                    </p>
                  </Aside>
                );
              })}
            </QuesSection>

            <AnwrSection>
              {console.log(answers.results)}
              {answers.results.map(answr => {
                return (
                  <div key={answr.answer_id}>
                    <p>A: {answr.body}</p>
                    <p>{`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} | Helpful  | Report </p>
                    <Thumbnails photos={answr.photos} />
                    <div>
                      <p>{`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} | Helpful  | Report </p>
                    </div>
                  </div>
                );

            </AnwrSection>
          </Main>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsList;