import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

const MainContainer = styled.div`
  max-width: 340px;
  display: flex;
  flex-wrap: wrap;
`;

const SelectSize = styled.select`
  margin: 8px;
  height: 50px;
  width: 150px
`;

const SelectQty = styled.select`
  margin: 8px;
  height: 50px;
  width: 150px;
`;

const AddButton = styled.button`
  margin: 8px;
  height: 50px;
  width: 250px;
`;

const LikeButton = styled.button`
  margin: 8px;
  height: 50px;
  width: 50px;
`;

const TextResponse = styled.div`
  color: red;
  position: absolute;
  top: 570px;
  left: 950px;
  visibility: hidden;
`;


const AddToCart = () => {

  const { currStyle } = React.useContext(StylesContext);
  const [style] = currStyle;

  const [skuSelected, setSkuSelected] = useState();
  const [qtySelected, setQtySelected] = useState(0);

  const [qtyAvailable, setQtyAvailable] = useState([]);
  const [sizesAvailable, setSizesAvailable] = useState([]);
  const [qtyVisible, setQtyVisible] = useState(false);

  const [cartError, setCartError] = useState('sdgfsdfg');
  //FUTURE UPDATE
  // const [cartVisible, setCartVisible] = useState(true);

  useEffect(() => {
    getSizes();
    setQtyVisible(false);
  }, [style]);

  useEffect(() => {
    getQty();
  }, [skuSelected]);

  const setSku = () => {
    const selectBox = document.getElementById('select-size');
    const value = selectBox.options[selectBox.selectedIndex].value;

    if (value === 'Select Size') {
      setSkuSelected(undefined);
      setQtyVisible(false);
    } else {
      setSkuSelected(value);
      setQtyVisible(true);
    }

    value === 'Select Size' ? setQtyVisible(false) : setQtyVisible(true);
    getQty();
  };

  const setQty = () => {
    const selectBox = document.getElementById('select-qty');
    const value = selectBox.options[selectBox.selectedIndex].value;

    value === 'Select Quantity' ? setQtySelected(undefined) : setQtySelected(value);
  };

  const getSizes = () => {
    const sizes = {};

    Object.keys(style.skus).forEach(sku =>
      style.skus[sku].quantity > 0 ? sizes[sku] = style.skus[sku].size : null
    );
    setSizesAvailable(sizes);
  };

  const getQty = () => {
    const numbers = [];

    if (skuSelected === 'Select Size' || skuSelected === undefined) {
      setQtyAvailable([]);
      setQtySelected();
      return;
    } else if (skuSelected) {
      let qty = style.skus[skuSelected].quantity;
      qty = qty > 15 ? 15 : qty;

      for (let i = 1; i <= qty; i++) {
        numbers.push(i);
      }
    }
    setQtyAvailable(numbers);
  };

  const showError = () => {
    const errorDiv = document.getElementById('cart-error');

    errorDiv.style.visibility = 'visible';
    setTimeout(() => {
      errorDiv.style.visibility = 'hidden';
    }, 2000);

  };

  const addToCart = () => {

    if (!skuSelected || skuSelected === 'Select Size') {
      setCartError('PLEASE SELECT SIZE FIRST');
      showError();
    } else if ( !qtySelected || qtySelected === 'Select Qty') {
      setCartError('PLEASE SELECT QUANTITY FIRST');
      showError();
    }



  };

  return (
    <MainContainer>
      <SelectSize id='select-size' onChange={ setSku  }>
        <option defaultValue='Select Size'>Select Size</option>
        {
          Object.keys(sizesAvailable).map((sku, i) => (
            <option key={ i } value={ sku }>
              { sizesAvailable[sku] }
            </option>
          ))
        }
      </SelectSize>
      <SelectQty id='select-qty' onChange={ setQty }>
        <option defaultValue={ qtyVisible ? 'Select Quantity' : '-' }>
          { qtyVisible ? 'Select Quantity' : '-' }
        </option>
        {
          qtyAvailable.map((n => (
            <option key={ n } value={ n }>{ n }</option>
          )))
        }
      </SelectQty>

      <AddButton onClick={ addToCart }>ADD TO BAG</AddButton>
      <LikeButton>
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
          height="28px"
          width="28px"
          color="black"
        ><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
        </svg>
      </LikeButton>
      <TextResponse id='cart-error'>{ cartError }</TextResponse>
    </MainContainer>
  );
};

export default AddToCart;