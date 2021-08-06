import styled from 'styled-components';

const ContainerQA = styled.div`
    display: flex;
    flex-flow: column;
    width: 70%;
    margin: 0 auto;
`;

const Button = styled.button`
    border: 1px solid;
    padding: 2%;
    margin: 1%;
    font-size: 14px;
    font-weight: bold;
    background: transparent;
`;

const Buttons = styled.div`
    display: flex;
`;

export { Button, Buttons, ContainerQA };