import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../contexts/ProductContext';

import Search from './Search/Search.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import AddQuestion from './AddQuestion/AddQuestion.jsx';
import AddAnswer from './AddAnswer/AddAnswer.jsx';
import Modal from './Modal/Modal.jsx';

import { ContainerQA, H3 } from './Q&A.js';

const QandA = () => {

  const { product } = React.useContext(ProductContext);
  const [currProduct] = product;

  const [questions, setQues] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [quesId, setQuesId] = useState(0);

  const [isOpen, setIsOpen] = useState({open: false, form: {
    addAns: false,
  } });

  const openAnsModal = () => {
    const isOpen = {open: true, form: {
      addAns: true,
    }};
    setIsOpen(isOpen);
  };

  const openQuesModal = () => {
    const isOpen = {open: true, form: {
      addAns: false,
    }};
    setIsOpen(isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchQues = async () => {
    try {
      const ques = await axios.get(`/qa/questions/${currProduct.id}/${1}/${30}`);
      setQues(ques.data.results);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQues();
  }, [product]);


  const getAns = async (question_id) => {
    try {
      let ans = await axios.get(`/qa/questions/${question_id}/answers`);
      return ans.data;
    } catch(err) {
      console.error(err);
    }
  };

  useEffect( () => {
    let obj = {};
    if (questions.length > 0) {
      let getAnswers = questions.forEach(async (ques) => {
        let a = await getAns(ques.question_id);
        obj[ques.question_id] = a.results;
      });
    }
    setAnswers([obj]);
  }, [questions]);

  const helpful = async (id) => {
    try {
      let help = await axios.put(`/qa/questions/${id}/helpful`);
      // fetchQues();
      console.log(help);
    } catch(err) {
      console.error(err);
    }
  };

  const report = async (id) => {
    try {
      let reporter = await axios.put(`/qa/answers/${id}/report`);
    } catch(err) {
      console.error(err);
    }
  };


  return (
    <>
      { questions ?
        <ContainerQA>
          <H3>Questions & Answers</H3>

          <Search questions={questions} setQues={setQues} fetchQues={fetchQues}/>

          <QuestionsList
            questions={questions}
            answers={answers[0]}
            openAnsModal={openAnsModal}
            openQuesModal={openQuesModal}
            helpful={helpful}
            setQuesId={setQuesId}
            reporter={report}
          />

          {isOpen.open &&
            <Modal closeModal={closeModal} product={currProduct}>
              {isOpen.form.addAns ?  <AddAnswer quesId={quesId}  /> :  <AddQuestion productId={currProduct.id} />}
            </Modal>
          }
        </ContainerQA>
        :
        null
      }
    </>
  );
};

export default QandA;
