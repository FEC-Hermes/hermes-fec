import React, { useState, useEffect}  from 'react';
import styled from 'styled-components';


const AddAnswer = () => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [uploadFile, setUploadFile] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Submit your Answer</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <input
            type='text'
            value={answer}
            name={answer}
            onChange={e => setAnswer(e.target.value)}
            required
          />
        </div>


        <div>
          <input
            type='text'
            value={nickname}
            name={nickname}
            placeholder='Example: jack543!'
            onChange={e => setNickname(e.target.value)}
            required
          />
          <p>For privacy reasons, do not use your full name or email address” will appear.</p>
        </div>

        <div>
          <input
            type='text'
            value={email}
            name={email}
            placeholder='Example: jack@email.com'
            onChange={e => setEmail(e.target.value)}
            required
          />
          <p>For authentication reasons, you will not be emailed” will appear.</p>
        </div>

        <div>
          <p>Upload a photo.</p>
          <input
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