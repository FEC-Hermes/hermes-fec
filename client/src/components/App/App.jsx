import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';

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
      {/* <Overview product={ product }/> */}
      {/* <Related_Items_Comparison /> */}
      <QandA />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
