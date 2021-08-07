import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

const MainContainer = styled.div`
  max-width: 340px;
  display: flex;
  flex-wrap: wrap;
`;

const SelectSize = styled.select`
  font-family: 'Josefin Slab', serif;
  font-size: 18px;

  margin: 8px;
  height: 50px;
  width: 150px
`;

const SelectQty = styled.select`
  font-family: 'Josefin Slab', serif;
  font-size: 18px;

  margin: 8px;
  height: 50px;
  width: 150px;
`;

const AddButton = styled.button`
  font-family: 'Josefin Slab', serif;
  font-size: 20px;

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
  font-family: 'Josefin Slab', serif;
  font-size: 18px;
  margin-left: 10px;

  width:300px;
  color: red;
  top: 570px;
  left: 950px;
  visibility: hidden;
`;

const OOS = styled.div`
`;

const AddToCart = () => {

  const { currStyle: [style] } = React.useContext(StylesContext);

  const [skuSelected, setSkuSelected] = useState();
  const [qtySelected, setQtySelected] = useState(0);
  const [qtyAvailable, setQtyAvailable] = useState([]);
  const [sizesAvailable, setSizesAvailable] = useState([]);
  const [qtyVisible, setQtyVisible] = useState(false);

  const [cartMessage, setCartMessage] = useState('');
  const [cartVisible, setCartView] = useState(true);

  useEffect(() => {
    getSizes();
    setSkuSelected('Select Size');
    document.getElementById('select-size').value = 'Select Size';
  }, [style]);

  useEffect(() => {
    getQty();
    setSku();
  }, [skuSelected]);

  useEffect(() => {
    toggleCart();
  }, [cartVisible]);

  const getSizes = () => {
    const sizes = {};

    Object.keys(style.skus).forEach(sku => {
      let item = style.skus[sku];
      item.quantity > 0 ?
        sizes[sku] = item.size : null;
    });

    if (!Object.keys.length) {
      setCartView(false);
      return;
    }

    setCartView(true);
    setSizesAvailable(sizes);
    return sizes;
  };

  const setSku = () => {
    const selectBox = document.getElementById('select-size');
    const value = selectBox.options[selectBox.selectedIndex].value;

    if (value === 'Select Size') {
      document.getElementById('select-qty').setAttribute('disabled', 'disabled');
      setSkuSelected(undefined);
      setQtyVisible(false);
    } else {
      setSkuSelected(value);
      setQtyVisible(true);
      document.getElementById('select-qty').removeAttribute('disabled');
    }
  };

  const getQty = () => {
    const numbers = [];

    if (!skuSelected || skuSelected === 'Select Size') {
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

  const setQty = () => {
    const selectBox = document.getElementById('select-qty');
    const value = selectBox.options[selectBox.selectedIndex].value;
    value === 'Select Quantity' ? setQtySelected(undefined) : setQtySelected(value);
  };

  const addToCart = () => {

    if (!skuSelected || skuSelected === 'Select Size') {
      setCartMessage('SELECT SIZE FIRST');
    } else if (!qtySelected || qtySelected === 'Select Qty') {
      setCartMessage('SELECT QUANTITY FIRST');
    } else if (skuSelected && qtySelected) {
      for (let i = 0; i < qtySelected; i++) {
        axios.post('/cart', {params: {sku_id: skuSelected}});
        i++;
      }
      setCartMessage('ADDED TO CART');
      setSkuSelected('Select Size');
      document.getElementById('select-size').value = 'Select Size';
    }
    showCartMessage();
  };

  const showCartMessage = () => {
    const cartText = document.getElementById('cart-message').style;
    cartText.visibility = 'visible';
    setTimeout(() => cartText.visibility = 'hidden', 2500);
  };

  const toggleCart = () => {
    const oos = document.getElementById('oos').style;
    !cartVisible ? oos.visibility = 'visible' : oos.visibility = 'hidden';
  };

  return (
    <React.Fragment>
      <OOS id='oos'>OUT OF STOCK</OOS>
      <MainContainer>
        <TextResponse id='cart-message'>{ cartMessage }</TextResponse>
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
        <LikeButton aria-label="like button">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 576 512"
            height="28px"
            width="28px"
            color="black"
            alt="like button"
          ><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
          </svg>
        </LikeButton>
      </MainContainer>
    </React.Fragment>
  );
};

export default AddToCart;