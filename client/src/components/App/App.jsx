import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Overview from '../Overview/Overview.jsx';
import QandA from '../Q&A/Q&A.jsx';
import RatingsAndReviews from '../Ratings&Reviews/Ratings&Reviews.jsx';
import Related_ItemsAndComparison from '../Related_Items&Comparison/Related_Items&Comparison.jsx';


const App = () => {

  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});

  useEffect(() => {
    axios.get('/products')
      .then(results => {
        setProduct(results.data[0]);
        console.log(results.data[0]);
        axios.get(`/reviews/${results.data[0].id}/relevant/1/2`)
          .then(results => {
            console.log('Reached Reviews fetch with data');
            console.log(results.data);
            setReviews(results.data);
          });
        axios.get(`/reviews/meta/${results.data[0].id}`)
          .then(results => {
            console.log('Reached Reviews meta fetch with data');
            console.log(results.data);
            setReviewMeta(results.data);
          });
      });

    //product id === 17067
  }, []);

  return (
    <div>
      <nav>NAV BAR</nav>
      <Overview product={ product }/>
      <Related_ItemsAndComparison />
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
