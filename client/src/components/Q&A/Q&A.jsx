import React, { useState ,useEffect } from 'react';
import { Button, Buttons, ContainerQA } from './Q&A.js';
import axios from 'axios';
import ProductContext from '../contexts/ProductContext';

import Search from './Search/Search.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';

import AddQuestion from './AddQuestion/AddQuestion.jsx';
import AddAnswer from './AddAnswer/AddAnswer.jsx';
import Modal from './Modal/Modal.jsx';



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
      },
      {
        'question_id': 39,
        'question_body': 'Why is this product cheaper here than other sites?',
        'question_date': '2018-10-18T00:00:00.000Z',
        'asker_name': 'williamsmith',
        'question_helpfulness': 4,
        'reported': false,
        'answers': {
          69: {
            'id': 69,
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
      },


    ],

  }]

};

const QandA = () => {

  const { product } = React.useContext(ProductContext);
  const [currProduct] = product;

  const [questions, setQues] = useState();
  const [answers, setAns] = useState(state.answers[0]);

  const [isOpen, setIsOpen] = useState({open: false, form: {
    addAns: false,
  } });

  const openAnsModal = () => {
    const isOpen = {open: true, form: {
      addAns: true,
    }};
    setIsOpen(isOpen);
  };

  const openModal = () => {
    const isOpen = {open: true, form: {
      addAns: false,
    }};
    setIsOpen(isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };



  useEffect(() => {
    const fetchQues = async () => {
      try {

        const ques = await axios.get(`/qa/questions/${currProduct.id}`);
        console.log(';;; ',ques.data)

        setQues([ques.data]);
      } catch(err) {
        console.error(err);
      }
    };
    fetchQues();
  }, []);

  return (

    <ContainerQA>
      {console.log('questions State: ',questions)}
      <h3>Questions & Answers {}</h3>
      <Search />
      {/* <QuestionsList
        questions={questions}
        answers={answers}
        openModal={openAnsModal} */}
      {/* /> */}
      <p>LOAD MORE ANSWERERS</p>
      <Buttons>
        <Button>MORE ANSWERED QUESTIONS</Button>
        <Button onClick={openModal}>ADD A QUESTION  +</Button>
      </Buttons>

      {isOpen.open &&
        <Modal closeModal={closeModal}>
          {isOpen.form.addAns ?  <AddAnswer /> :  <AddQuestion />}
        </Modal>
      }
    </ContainerQA>
  );
};




export default QandA;