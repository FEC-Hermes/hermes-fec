import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsAndReviews = ({reviews, reviewMeta}) => {
  return (
    <div>
      <div id="ratings-and-reviews-title">Ratings & Reviews</div>
      <div id="ratings-and-reviews-container">
        <Ratings />
        <Reviews />
      </div>
    </div>
  );
};

export default RatingsAndReviews;