import React from 'react';
import styled from 'styled-components';

import StylesContext from '../contexts/StylesContext';

const AddToCart = () => {

  const { currStyle } = React.useContext(StylesContext);
  const [style] = currStyle;
  
  return (
    <div className="cart-container">
      <select>
        {Object.keys(style.skus).map(sku => (
          <option key={ `${sku}size` }>
            { style.skus[sku].size }
          </option>
        ))}
      </select>
      <select>
        {Object.keys(style.skus).map(sku => (
          <option key={ `${sku}qty` }>
            { style.skus[sku].quantity  }
          </option>
        ))}
      </select>

      <button>ADD TO BAG</button>
      <div>**</div>
    </div>
  );
};

export default AddToCart;