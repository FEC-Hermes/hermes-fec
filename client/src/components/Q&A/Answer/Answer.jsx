import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Thumbnails from '../Thumbnails/Thumbnails.jsx';

import  {
  Pd,
  Pipe,
  Span
} from '../Accordion/Accordion.js';
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

  useEffect( () => {
    getAns(quesId);
  }, []);

  console.log('answers  ',answers)
  return (
    <div>
      {answers && answers.map(ans => {
        return (
          <div key={ans.answer_id}>
            <p>
              A: {ans.body}
            </p>
            <p>
              {`by User ${ans.answerer_name}, ${moment().format('MMM Do YY')}`}
              <Pipe>|</Pipe>
              <span>Helpful?</span>
              <Pipe>|</Pipe>
              <Span>Report</Span>
            </p>

            <Thumbnails photos={ans.photos} />

            {/*    <div key={answr.answer_id}>

           <div>
             <p>
               {`by User ${answr.answerer_name}, ${moment().format('MMM Do YY')}`} <Pipe>|</Pipe>  Helpful?
               <Pipe>|</Pipe>
               <Span onClick={handleReported(answr.answer_id)}>Report</Span>
             </p>
           </div>
         </div> */}
          </div>
        );
      })}
    </div>
  );
};


// answerer_name: "Shania_Adams"
// body: "Eum maiores ipsam sed quas harum."
// date: "2020-09-29T00:00:00.000Z"
// helpfulness: 2
// photos: []

export default Answer;
