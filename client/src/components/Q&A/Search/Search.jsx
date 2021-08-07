import React, { useState, useEffect } from 'react';
import { Input, Form, SearchBtn, Image } from './Search.js';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';


const Search = ({ questions, setQues, fetchQues }) => {

  // console.log(questions);

  const [searchInput, setSearch] = useState('');

  useEffect(() => {

    if (searchInput.length >= 3) {

      let list = questions.filter(ques =>
        ques.question_body.toLowerCase().includes(searchInput.toLowerCase())
      );

      setQues(list);
    }
    else if(searchInput.length < 3) {
      // setQues(questions);
      fetchQues();
    }

  }, [searchInput]);



  return (
    <Form>
      <Input
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={e => setSearch(e.target.value)}
        type='text'
      />
      <SearchBtn>
        <Image src={searchIcon} alt="search"/>
      </SearchBtn>
    </Form>
  );
};

export default Search;
