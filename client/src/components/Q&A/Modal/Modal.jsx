import React from 'react';
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
    transform: translateX(-50%) translateY(-50%);
`;
// left: 50%;

const Close = styled.button`
    font-size: 25%;
`;

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <Overlay className='overlay'></Overlay>
      <div className='modal'>
        <header>
          <h1>“Submit your Answer”.</h1>
          <h2>"[Product Name]: [Question Body]”</h2>
        </header>

        <ModalBox className='content'>
          {children}
          <Close onClick={closeModal}>X</Close>
        </ModalBox>

      </div>
    </>
  );
};

export default Modal;