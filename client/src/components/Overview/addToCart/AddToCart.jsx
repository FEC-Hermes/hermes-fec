import React, { useState, useEffect } from 'react';

const AddToCart = () => {

  return (

    <div className="cart-container">
      <select>
        {
          Object.keys(currStyle.skus).map(sku => (
            <option key="sku">{}</option>
          ))
        }
      </select>

      <select>
      </select>

      <button>ADD TO BAG</button>
    </div>
  );
};

export default AddToCart;