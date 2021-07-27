import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_ItemsAndComparison from '../Related_Items&Comparison/Related_Items&Comparison.jsx';

const App = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const products = await axios.get('/products');
      setProduct(products.data[0]);
    }
    getProduct();
  }, []);

  return (
    <div>
      <nav>NAV BAR</nav>
      <Overview product={ product }/>
      <Related_ItemsAndComparison />
      <QandA />
      <RatingsAndReviews />
    </div>
  );
};

export default App;
