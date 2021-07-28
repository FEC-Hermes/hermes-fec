import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_Items_Comparison from '../Related_Items_Comparison/Related_Items_Comparison.jsx';

const App = () => {

  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});

  useEffect(() => {
    axios.get('/products')
      .then(results => {
        setProduct(results.data[4]);
        axios.get(`/reviews/${results.data[4].id}/relevant/1/10000`)
          .then(results => {
            setReviews(results.data);
          });
        axios.get(`/reviews/meta/${results.data[4].id}`)
          .then(results => {
            setReviewMeta(results.data);
          });
      });

    //product id === 17067
  }, []);

  return (
    <div>
      <nav>NAV BAR</nav>
      <Overview product={ product }/>
      <Related_Items_Comparison />
      <QandA />
      {
        Object.keys(reviews).length > 0 && Object.keys(reviewMeta).length > 0
          ?
        <RatingsAndReviews
          reviews={reviews}
          reviewMeta={reviewMeta}
        />
          :
        null
      }
    </div>
  );
};

export default App;
