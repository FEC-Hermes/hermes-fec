import React from 'react';
import styled from 'styled-components';
const searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';


const Input = styled.input`
  border: none;
  height: 50px;
  font-size: 20px;
  width: 90%;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: pointer;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon{
    svg{
      fill: dodgerBlue;
    }
  }
`;

const Form = styled.form`
    display: flex;
    border: 1px solid;
    padding-left: 1rem;
`;

const SearchBtn = styled.button`
  width: 10%;
  background: transparent;
  border: none;
`;

const Image = styled.img`
  width: 37%;
`;

const Search_Container = styled.div`
  margin: 2rem;
`;


const Search = () => {
  return (
    <Search_Container>
      <Form>
        <Input
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          type='text'
        />
        <SearchBtn>
          <Image src={searchIcon} />
        </SearchBtn>
      </Form>
    </Search_Container>

  );
};

export default Search;

