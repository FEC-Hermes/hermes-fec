import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';

import ProductContext from '../contexts/ProductContext.js';

const App = () => {

  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});

  useEffect(() => {
    axios.get('/products/17069')
      .then(({ data }) => {
        setProduct(data);
        axios.get(`/reviews/${data.id}/newest/1/2`)
          .then(({ data }) => {
            setReviews(data);
          });
        axios.get(`/reviews/meta/${data.id}`)
          .then(({ data }) => {
            setReviewMeta(data);
          });
      });
  }, []);

  return (
    <div>
      <nav>NAV BAR</nav>
      <ProductContext.Provider value={{
        product: [product, setProduct],
        reviews: reviews,
        setReviews: setReviews,
        reviewMeta: reviewMeta,
        setReviewMeta: setReviewMeta
      }}>
        {/* OVERVIEW WONT RENDER UNTiL PRODUCT IS SET */}
        {
          Object.keys(product).length ? <Overview /> : null
        }
        <Related_Items_Comparison />
        <QandA />
        {
          Object.keys(reviews).length > 0 && Object.keys(reviewMeta).length > 0
            ?
            <RatingsAndReviews/>
            :
            null
        }
      </ProductContext.Provider>
    </div>
  );
};

export default App;
