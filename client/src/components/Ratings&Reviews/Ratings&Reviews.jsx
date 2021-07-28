import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div>
      <div id="ratings-and-reviews-title">Ratings & Reviews
        <div id="ratings-and-reviews-container">
          <Ratings />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;