/* eslint-disable indent */
import React, {useEffect, useState} from 'react';
import {ModalContainer, NameBar, CheckMark, Modal_Main} from './styles.js';
const comparisons = ['100% cotton', '100% degradeable','denim','Crease resistance','Colorfastness'];
const checkmarkURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Check_mark_9x9.svg/1200px-Check_mark_9x9.svg.png'


const Modal = () => {
    return (
        <ModalContainer>
            <p>COMPARING</p>
            <NameBar>
                <h3>Product Short Name</h3>
                <h3>Product Short Name</h3>
            </NameBar>
            <div>
              {comparisons.map( (desc, idx) => {
                  return (
                 <Modal_Main key={idx}>
                     <div><CheckMark src={checkmarkURL}/></div>
                     <div><p>{desc}</p></div>
                     <div><CheckMark src={checkmarkURL}/></div>
                 </Modal_Main>
              )})}
            </div>
        </ModalContainer>
    );
};

export default Modal;