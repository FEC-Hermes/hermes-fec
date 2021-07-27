import React, { useState ,useEffect } from 'react';
import styled from 'styled-components';

// import axios from 'axios';

import Search from './Search/Search.jsx';
import Thumbnails from './Thumbnails/Thumbnails.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';



var state = {
    questions: [{
        'product_id': '5',

        'results': [
            {
                'question_id': 37,
                'question_body': 'Why is this product cheaper here than other sites?',
                'question_date': '2018-10-18T00:00:00.000Z',
                'asker_name': 'williamsmith',
                'question_helpfulness': 4,
                'reported': false,
                'answers': {
                    68: {
                        'id': 68,
                        'body': 'We are selling it here without any markup from the middleman!',
                        'date': '2018-08-18T00:00:00.000Z',
                        'answerer_name': 'Seller',
                        'helpfulness': 4,
                        'photos': []
                        // ...
                    }
                }
            }
        ]
    }],

    answers: [{
        'question': '1',
        'page': 0,
        'count': 5,
        'results': [
            {
                'answer_id': 5,
                'body': 'Something pretty durable but I can\'t be sure',
                'date': '2018-01-04T00:00:00.000Z',
                'answerer_name': 'metslover',
                'helpfulness': 5,
                'photos': [
                    {
                        'id': 1,
                        'url': 'urlplaceholder/answer_5_photo_number_1.jpg'
                    },
                    {
                        'id': 2,
                        'url': 'urlplaceholder/answer_5_photo_number_2.jpg'
                    }
                ]
            }
        ]
    }]

};
console.log(state);

const ContainerQA = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
  margin: 0 auto;
`;

const Button = styled.button`
  border: 1px solid;
  padding: 2%;
  margin: 1%;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
`;

const Buttons = styled.div`
  display: flex;
`;
const QandA = () => {
    const [questions, setQues] = useState(state.questions[0]);
    const [answers, setAns] = useState(state.answers[0]);


    // const apis = {};

    // useEffect(() => {
    //     const fetchQues = async () => {
    //         const ques = await axios.get('/qa/questions');
    //         apis.push({ques: ques.data});
    //     };

    //     fetchQues();
    // });

    console.log(questions);

    return (

        <ContainerQA>
            <h3>Questions & Answers {}</h3>
            <Search />
            <QuestionsList />
            <Thumbnails />
            <p>LOAD MORE ANSWERERS</p>
            <Buttons>
                <Button>MORE ANSWERED QUESTIONS</Button>
                <Button>ADD A QUESTION  +</Button>
            </Buttons>
        </ContainerQA>
    );
};




export default QandA;