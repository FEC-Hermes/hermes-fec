import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion.jsx';

const Main = styled.main`
    font-family: Fira Sans;
    display: flex;
    flex-flow: column;
`;

const QuestionsList = ({questions, answers, openAnsModal, openQuesModal, helpful, reporter, setQuesId }) => {
  return (
    <div>
      <ul>
        <li>
          <Main>
            <Accordion
              questions={questions}
              answers={answers}
              openQuesModal={openQuesModal}
              openAnsModal={openAnsModal}
              reporter={reporter}
              setQuesId={setQuesId}
              helpful={helpful}
            />
          </Main>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsList;