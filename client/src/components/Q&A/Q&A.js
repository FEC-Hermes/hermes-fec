import styled from 'styled-components';

const ContainerQA = styled.div`
    display: flex;
    flex-flow: column;
    ${'' /* padding: 4%; */}
    width: 1280px;
    margin: 3% auto;
    background: whitesmoke;

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

const H3 = styled.h3`
    text-align: center;
`;

export { Button, Buttons, ContainerQA, H3 };