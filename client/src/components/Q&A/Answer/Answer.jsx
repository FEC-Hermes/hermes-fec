import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Thumbnails from '../Thumbnails/Thumbnails.jsx';

import  { Pipe, Span } from '../Accordion/Accordion.js';

const Answer = ({ quesId }) => {
  const [helped, setHelped] = useState(false);
  const [report, setReported] = useState(false);
  const [answers, setAnswers] = useState([]);

  const getAns = async (question_id) => {
    try {
      let ans = await axios.get(`/qa/questions/${question_id}/answers`);
      console.log(ans.data.results);
      setAnswers(ans.data.results);
    } catch(err) {
      console.error(err);
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


  const handleHelpful = (id) => {
    if (!helped) {
      helpful(id);
      setHelped(true);
    }
    else {
      console.log('you touched me already');
    }
  };

  const helpful = async (id) => {
    try {
      let help = await axios.put(`/qa/questions/${id}/helpful`);
    } catch(err) {
      console.error(err);
    }
  };

  const reporter = async (id) => {
    try {
      let reporter = await axios.put(`/qa/answers/${id}/report`);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect( () => {
    getAns(quesId);
  }, []);


  return (
    <div>
      {answers && answers.slice(0, 3).map(ans => {
        return (
          <div key={ans.answer_id}>
            <p>
              A: {ans.body}
            </p>
            <p>
              {`by User ${ans.answerer_name}, ${moment().format('MMM Do YY')}`}
              <Pipe>|</Pipe>
              <span onClick={() => handleHelpful(ans.answer_id)}>{`Helpful? Yes (${ans.helpfulness})`}</span>
              <Pipe>|</Pipe>
              <Span onClick={() => handleReported(ans.answer_id)}>Report</Span>
            </p>

            <Thumbnails photos={ans.photos} />
          </div>
        );
      })}
    </div>
  );
};

export default Answer;
