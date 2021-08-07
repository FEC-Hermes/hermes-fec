import React from 'react';
import { Overlay, ModalBox, Close, ProduntName } from './Modal.js';

const Modal = ({ children, closeModal, product }) => {
  return (
    <>
      <Overlay className='overlay'></Overlay>
      <div className='modal'>

        <ModalBox className='content'>
          <header>
            <ProduntName>{`"${product.name}"`}</ProduntName>
          </header>
          {children}
          <Close onClick={closeModal}>X</Close>
        </ModalBox>
      </div>
    </>
  );
};

export default Modal;
