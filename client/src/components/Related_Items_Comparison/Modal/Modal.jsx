/* eslint-disable indent */
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {ModalContainer, NameBar, CheckMark, Modal_Main} from './styles.js';
const comparisons = ['100% cotton', '100% degradeable','denim','Crease resistance','Colorfastness'];
const checkmarkURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Check_mark_9x9.svg/1200px-Check_mark_9x9.svg.png';

import ProductContext from '../../contexts/ProductContext.js';

const Modal = ({productCardId}) => {
  const {product:[product]} = useContext(ProductContext);
  const [relatedProducts, setProduct] = useState([]);
  const compare = (arr1,arr2) => {
    if(arr2){
     return arr1.filter( ({feature}) => !arr2.every(({feature:feature2}) =>{
        feature === feature2;
     }));
    }
   };

useEffect( () => {
    async function fetchData(){
      try {
        const {data} = await axios.get(`/products/${productCardId}`);
        setProduct(data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[product]);
  const {features} = product;
  const {features:relatedFeatures} = relatedProducts;
    return (
        <ModalContainer>
            <p>COMPARING</p>
            <NameBar>
                <h3>{product.name}</h3>
                <h3>{relatedProducts.name}</h3>
            </NameBar>
            <div>
              {
              compare(features,relatedFeatures)?
              compare(features,relatedFeatures).map( ({feature,value}, idx) => {
                  return (
                 <Modal_Main key={idx}>
                     <div><CheckMark src={checkmarkURL}/></div>
                     <div><p>{feature + ' : ' + value}</p></div>
                     <div><CheckMark src={checkmarkURL}/></div>
                 </Modal_Main>
              );}):null
            }
            </div>
        </ModalContainer>
    );
};

export default Modal;