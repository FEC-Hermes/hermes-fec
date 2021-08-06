
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


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

const AddQuestion = ({productId}) => {
  const [formValues, setFormValues] = useState({
    body: '',
    name: '',
    email: '',
    product_id: Number(productId)
  });

  const handleChange = name => e => {
    e.preventDefault();
    setFormValues({...formValues, [name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    const postData = async (data) => {
      try {
        let newQues = await axios.post('/qa/questions', data);
        console.log(newQues)
      } catch(err) {
        console.error(err);
      }
    };

    postData(formValues);
    // console.log('formValues  ',formValues)
  };

  return (
    <div>
      <h1>Ask Your Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            type='text'
            name='body'
            value={formValues.question}
            placeholder='Your Question....'
            onChange={ handleChange('body')}
            required
          />
        </div>

        <div>
          <label>YOUR NICKNAME:</label>
          <Input
            type='text'
            name='name'
            value={formValues.name}
            onChange={ handleChange('name')}
            placeholder='Example: jackson11!'
            required
          />
          <P>For privacy reasons, do not use your full name or email address” will appear.</P>
        </div>

        <div>
          <label>EMAIL:</label>
          <Input
            type='text'
            name='email'
            value={formValues.email}
            onChange={ handleChange('email')}
            placeholder='Why did you like the product or not?'
            required
          />
          <P>For authentication reasons, you will not be emailed” will appear.</P>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
