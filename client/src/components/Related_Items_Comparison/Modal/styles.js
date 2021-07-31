import styled from 'styled-components';
const ModalContainer = styled.div`
    background-color: ghostwhite;
    border: 0.18rem solid gray;
    padding: 1rem;
    position: absolute;
    // top: 109rem;
    height: 25rem;
    width: 30rem;
    // left: 33%;
`;

const NameBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CheckMark = styled.img`
    height: 1rem;
    width: 1rem;
`;

const Modal_Main = styled.div`
    display: grid;
    grid-template-columns: 1rem 10rem 1rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`;

export { ModalContainer, NameBar, CheckMark, Modal_Main };