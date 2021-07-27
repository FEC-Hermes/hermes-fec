import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToCart = () => {

  const [style, setStyle] = useState({});

  useEffect(() => {
    getAllStyles();
  }, []);

  const getAllStyles = async (product_id) => {
    product_id = 17607;

    await axios.get('/products/?product_id/styles', {params: {product_id: product_id}})
      .then(data => setStyle(data));
  };

  const setCurrentStyle = (style_id) => {

  };

  return (

    <div className="cart-container">
      <select>
        
      </select>
      <input type="option"></input>
      <input type="option"></input>
    </div>

  );
};

export default AddToCart;