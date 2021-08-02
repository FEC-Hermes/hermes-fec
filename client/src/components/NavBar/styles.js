import styled from 'styled-components';

const InputBar = styled.input`
  width: 90%;
  border: none;
  margin: 0.8rem;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 2rem;
  &:focus {
    outline: none;
    // border:1px solid red;
  }
`;

const SearchBarContainer = styled.div`
  padding: 2rem;
  background-color: whitesmoke;

`;

const Img = styled.img`
  height: 2rem;
  border:none;
  padding: 1rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  border:1px solid black;
  align-items: center;
`;


export {InputBar, SearchBarContainer, Img, SearchBarWrapper};