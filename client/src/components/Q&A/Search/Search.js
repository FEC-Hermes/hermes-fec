import styled from 'styled-components';

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
`;

const SearchBtn = styled.button`
width: 12%;
background: transparent;
border: none;
margin: 0% -2% 0% 1%;
`;

const Image = styled.img`
width: 37%;
`;

const Search_Container = styled.div`
  margin: 2rem;
`;

export { Input, Form, SearchBtn, Image, Search_Container  };