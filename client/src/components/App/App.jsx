import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';
import ProductContext from '../contexts/ProductContext.js';

const App = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const products = await axios.get('/products');
      setProduct(products.data[4]);
    }
    getProduct();
  }, []);

  return (
    <div>
      <nav>NAV BAR</nav>
      <ProductContext.Provider value={ { product:[product, setProduct] } }>

        <Overview product={ product }/>
        <Related_Items_Comparison />
        <QandA />
        <RatingsAndReviews />

      </ProductContext.Provider>
    </div>
  );
};

export default App;
