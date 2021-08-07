import React from 'react';
import Question from '../Question/Question.jsx';
import  {QuesSection} from './Accordion.js';

const Accordion = ({ questions, openAnsModal,  openQuesModal }) => {
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
