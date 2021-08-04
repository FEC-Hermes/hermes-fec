import styled from 'styled-components';

const Overlay = styled.div`
    width: 80%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    margin: auto 0;
`;

const ModalBox = styled.main`
    position: fixed;
    z-index: 200;
    background: #fff;
    width: 70%;
    margin: auto 40%;
    top: 50%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
`;

const Close = styled.button`
    border-radius: 50%;
    border: dotted;
    color: #1ad24b;
    font-size: 20px;
    text-shadow: 2 0 4 black;
    text-shadow: 2px 2px 2px #1f1313;
`;

const ProduntName = styled.h2`
    color: red;
`;

export { Overlay, ModalBox, Close, ProduntName };
