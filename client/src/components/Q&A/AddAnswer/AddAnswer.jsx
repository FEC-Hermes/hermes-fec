import React, { useState, useEffect}  from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Input = styled.input`
  width: 65%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const P = styled.p`
  font-family: monospace;
  color: #d6c9c9;
  letter-spacing: 0.3px;
`;

const AddAnswer = ({ quesId }) => {

  // console.log(quesId);

  const [uploadFile, setUploadFile] = useState(null);

  const [formValues, setFormValues] = useState({
    answer: '',
    nickname: '',
    email: ''
  });

  const handleChange = name => e => {
    e.preventDefault();
    setFormValues({...formValues, [name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    const postData = async (data) => {
    //   try {
    //     let newAns = await axios.post(`/qa/questions/${quesId}/answers`, data);
    //   } catch(err) {
    //     console.error(err);
    //   }
      console.log('data ',data);
    };


    postData(formValues);
  };

  return (
    <div>
      <h1>Submit your Answer</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <Input
            type='text'
            value={formValues.answer}
            name={formValues.answer}
            maxLength='1000'
            placeholder='Your Answer...'
            onChange={handleChange('answer')}
            required
          />
        </div>


        <div>
          <Input
            type='text'
            value={formValues.nickname}
            name={formValues.nickname}
            maxLength='60'
            placeholder='Example: jack543!'
            onChange={handleChange('nickname')}
            required
          />
          <P>For privacy reasons, do not use your full name or email address”.</P>
        </div>

        <div>
          <Input
            type='email'
            value={formValues.email}
            name={formValues.email}
            maxLength='60'
            placeholder='Example: jack@email.com'
            onChange={handleChange('email')}
            required
          />
          <P>For authentication reasons, you will not be emailed”.</P>
        </div>

        <div>
          <p>Upload a photo.</p>
          <Input
            type='file'
            // value={uploadFile}
            onChange={e => setUploadFile(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAnswer;
