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

  return (
    <>
      { questions ?
        <ContainerQA>
          <H3>Questions & Answers</H3>
          <Search
            questions={questions}
            setQues={setQues}
            fetchQues={fetchQues}
          />

          <QuestionsList
            questions={questions}
            openAnsModal={openAnsModal}
            openQuesModal={openQuesModal}
            setQuesId={setQuesId}
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
