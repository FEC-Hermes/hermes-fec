import React from 'react';
import { Overlay, ModalBox, Close } from './Modal.js';

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <Overlay className='overlay'></Overlay>
      <div className='modal'>

        <ModalBox className='content'>
          <header>
            <h2>"[Product Name]: [Question Body]”</h2>
          </header>
          {children}
          <Close onClick={closeModal}>X</Close>
        </ModalBox>

      </div>
    </>
  );
};

export default Modal;
