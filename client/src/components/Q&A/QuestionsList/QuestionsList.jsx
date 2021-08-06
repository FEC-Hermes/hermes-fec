import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion.jsx';

const Main = styled.main`
    font-family: Fira Sans;
    display: flex;
    flex-flow: column;
`;

const QuestionsList = ({questions, openAnsModal, openQuesModal, setQuesId }) => {
  return (
    <Main>
      <Accordion
        questions={questions}
        openQuesModal={openQuesModal}
        openAnsModal={openAnsModal}
        setQuesId={setQuesId}
      />
    </Main>
  );
};

export default QuestionsList;