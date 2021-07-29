/* eslint-disable indent */
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';


const AddQuestion = () => {
    const [question, setQuestion] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <input
          type='text'
          name='question'
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type='text'
          name='nickname'
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          required
        />
        <p>For privacy reasons, do not use your full name or email address” will appear.</p>
      </div>

      <div>
        <input
          type='text'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <p>For authentication reasons, you will not be emailed” will appear.</p>
      </div>

       <button type="submit">Submit</button>
    </form>
  );
};

export default AddQuestion;