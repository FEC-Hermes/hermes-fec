import React, {useState} from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsAndReviews = () => {
  var filter = {
    active: false,
    stars: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
  };
  const [reviewFilter, setReviewFilter] = useState(filter);

  return (
    <div id="rating-review">
      <div id="ratings-and-reviews-title">Ratings & Reviews</div>
      <div id="ratings-and-reviews-container">
        <Ratings setReviewFilter={setReviewFilter}/>
        <Reviews reviewFilter={reviewFilter}/>
      </div>
    </div>
  );
};

export default RatingsAndReviews;